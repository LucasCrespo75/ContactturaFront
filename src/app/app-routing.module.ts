import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ Routes, RouterModule} from '@angular/router';
import{ LoginComponent } from './login/login.component';
import{CreateEditContactsComponent} from './contacts/create-edit/create-edit.component';
import{ListContactsComponent } from './contact/list/list.component';
import{CreateEditUsersComponent} from './users/create-edit/create-edit.component';
import{ListUsersComponent} from './users/list/list.component';

const routes: Routes = [
{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'contacts-create-edit', component: CreateEditContactsComponent},
{path: 'contact-list', component: ListContactsComponent},
{path: 'user-create-edit', component: CreateEditUsersComponent},
{path: 'user-list', component: ListUsersComponent},
//{path: '**', componet: Erro404Component},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

