import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeopleComponent} from './people/people.component';


const routes: Routes = [
  {path: '', redirectTo: '/people', pathMatch: 'full'},
  {path: 'people', component: PeopleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
