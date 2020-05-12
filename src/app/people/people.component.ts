import {Component, OnInit} from '@angular/core';

import {NgxIndexedDBService} from 'ngx-indexed-db';
import {v4 as uuid} from 'uuid';
import {Person} from './person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  personDialogVisible: boolean;
  people: Person[];
  public person: Person;
  search: Person;
  searchPersonDialogVisible: boolean;

  constructor(private databaseService: NgxIndexedDBService) {
  }

  createUpdatePerson() {
    this.personDialogVisible = false;
    if (this.person.id === undefined) {
      this.person.id = uuid();

      this.databaseService.add('person', this.person)
        .then(() => {
            this.loadTable();
          },
          inError => {
            console.log(inError);
          });
    } else {
      this.databaseService.update('person', this.person).then(
        () => {
          this.loadTable();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  deletePerson(inPerson) {
    this.databaseService.delete('person', inPerson.id).then(
      () => {
        this.loadTable();
      },
      error => {
        console.log(error);
      }
    );
  }

  loadTable() {
    this.databaseService.getAll('person').then(
      (inPeople: Person[]) => {
        this.people = inPeople;
      },
      inError => {
        console.log(inError);
      }
    );
  }

  showSearchPersonDialog() {
    this.searchPersonDialogVisible = true;
  }

  searchPerson() {
    this.databaseService.getAll('person').then(
      (inPeople: Person[]) => {
        this.people = [];
        for (const thePerson of inPeople) {
          if (this.search.firstName.length > 0 && thePerson.firstName !== this.search.firstName) {
              continue;
          }
          if (this.search.lastName.length > 0 && thePerson.lastName !== this.search.lastName) {
              continue;
          }
          if (this.search.address.length > 0 && thePerson.address !== this.search.address) {
            continue;
          }
          if (this.search.phone.length > 0 && thePerson.phone !== this.search.phone) {
            continue;
          }
          this.people.push(thePerson);
        }
      },
      inError => {
        console.log(inError);
      }
    );
  }

  showNewPersonDialog() {
    this.person = {
      address: '',
      firstName: '',
      id: uuid(),
      lastName: '',
      phone: ''
    };

    this.personDialogVisible = true;
  }

  showUpdatePersonDialog(inPerson) {
    this.person = inPerson;
    this.personDialogVisible = true;
  }

  ngOnInit(): void {
    this.personDialogVisible = false;
    this.searchPersonDialogVisible = false;

    this.person = {
      address: '',
      firstName: '',
      id: uuid(),
      lastName: '',
      phone: ''
    };
    this.search = {
      address: '',
      firstName: '',
      id: '',
      lastName: '',
      phone: ''
    };

    this.loadTable();
  }

}
