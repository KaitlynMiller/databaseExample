import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {PeopleComponent} from './people/people.component';

import {DBConfig, NgxIndexedDBModule} from 'ngx-indexed-db';


const DATABASE_CONFIG: DBConfig = {
  name: 'com_skyviewsoftware_example_db',
  version: 1,
  objectStoresMeta: [{
    store: 'person',
    storeConfig: {name: 'id', keyPath: 'id', autoIncrement: false, options: {unique: true}},
    storeSchema: [
      {name: 'lastName', keypath: 'lastName', options: {unique: false}}
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    TableModule,
    NgxIndexedDBModule.forRoot(DATABASE_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
