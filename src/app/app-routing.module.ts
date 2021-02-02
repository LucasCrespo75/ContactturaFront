import{ NgModule } from '@angular/core';
import{ CommonModule } from '@angular/common';
import{ Routes, RouterModule} from '@angular/router';
import{ LoginComponent } from './login/login.component';
import{CreateEditContactsComponent} from './contacts/create-edit/create-edit.component';
import{ListContactsComponent} from './contacts/list/list.component';
import{ CreateEditUsersComponent} from './users/create-edit/create-edit.component';
import{ListUsersComponent} from './users/list/list.component'
import{ Erro404Component } from './sharedComponents/erro404/erro404.component';
import { AuthAdminGuard, AuthGuard } from './service/auth.guard';





const routes: Routes = [
{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'contacts-create-edit', component: CreateEditContactsComponent, canActivate: [AuthGuard]},
{path: 'contacts-list', component: ListContactsComponent, canActivate: [AuthGuard]},
{path: 'users-create-edit', component: CreateEditUsersComponent, canActivate: [AuthAdminGuard]},
{path: 'users-list', component: ListUsersComponent, canActivate: [AuthAdminGuard]},
//{path: '**', component: Erro404Component }

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

