import { Component } from '@angular/core';
import { Person } from './people/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'databaseExample';
/*  people: any = [
    {firstName: 'Abby', lastName: 'Albert', address: 'Apple Road', phone: '(111)-111-1111'},
    {firstName: 'Bob', lastName: 'Bell', address: 'Beach Road', phone: '(222)-222-1222'},
    {firstName: 'Cass', lastName: 'Carter', address: 'Crest Road', phone: '(333)-333-1333'},
    {firstName: 'Dallin', lastName: 'Dust', address: 'Dirt Road', phone: '(444)-444-1444'}
  ];*/
  people: Person;
}
