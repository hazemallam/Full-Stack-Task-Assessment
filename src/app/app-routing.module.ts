import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUserComponent} from './list-user/list-user.component';
import {AddUserComponent} from './add-user/add-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {SingleUserComponent} from './single-user/single-user.component';
import {AddContactComponent} from './add-contact/add-contact.component';
import {EditContactComponent} from './edit-contact/edit-contact.component';

const routes: Routes = [
  {path: '', component: ListUserComponent, pathMatch: 'full'},
  {path: 'newuser', component: AddUserComponent, pathMatch: 'full'},
  {path: 'edit/:id', component: EditUserComponent, pathMatch: 'full'},
  {path: 'editcontact/:id', component : EditContactComponent, pathMatch: 'full'},
  {path: 'newcontact/:id', component: AddContactComponent, pathMatch: 'full'},
  {path: ':id', component: SingleUserComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
