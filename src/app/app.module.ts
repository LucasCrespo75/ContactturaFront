import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateEditContactsComponent } from './contacts/create-edit/create-edit.component';
import { ListContactsComponent } from './contacts/list/list.component';
import { CreateEditUsersComponent } from './users/create-edit/create-edit.component';
import { ListUsersComponent } from './users/list/list.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { Erro404Component } from './sharedComponents/erro404/erro404.component';
import { NavigationBarComponent } from './sharedComponents/navigation-bar/navigation-bar.component';
// Importações do material design
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateEditContactsComponent,
    ListContactsComponent,
    CreateEditUsersComponent,
    ListUsersComponent,
    LoginComponent,
    Erro404Component,
    NavigationBarComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
