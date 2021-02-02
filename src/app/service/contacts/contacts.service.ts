import { Injectable } from '@angular/core';
import { Contacts } from '../../models/contacts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  api_url = environment.api_url;
 // username = localStorage.getItem('username');
  //password = localStorage.getItem('password');
  username: 'lucas.crespo@contacttura.com';
  password: 'root';
  private dataEdit = new BehaviorSubject<Contacts>(null);
  botaoEdit = this.dataEdit.asObservable();


  constructor(private http: HttpClient) { 
  }

  //listar todos
  getContacts(){
    const headers = new HttpHeaders({ Authorization: 'Basic' + btoa(this.username + ':' + this.password)});
    return this.http.get<Contacts[]>(this.api_url, {headers}).pipe(
      map(
        contactData =>{
        if(contactData){
          return contactData;
        }else{
          return [];
          }
        }
      )
    );
  }

  //criar
  createContacts(contacts: Contacts){
    const headers = new HttpHeaders({Authorization: 'Basic' + btoa(this.username + ':' + this.password )});
    return this.http.post<Contacts[]>(this.api_url, contacts, {headers}).pipe(
      map(
        contactsData =>{
          return contactsData;
        }
      )
    )
  }
  //contatos por lista
  getContactsForList(contacts: Contacts){
    this.dataEdit.next(contacts);
  }

//delete
deleteContacts(id: number){
  const headers = new HttpHeaders({Authorization: 'Basic' + btoa(this.username + ':' + this.password)});
  return this.http.delete<Contacts>(this.api_url + '/' + id, {headers}).pipe(
    map(
      contactData =>{
      return contactData;
      }
    )
  )

}

//acahar pelo id
findContactsById(id: number){
  const headers = new HttpHeaders({Authorization: 'Basic' + btoa(this.username + ':' + this.password)});
  return this.http.get<Contacts>(this.api_url + '/' + id, {headers}).pipe(
    map(
      contactData =>{
        return contactData;
      }
    )
  )
}

//update 
updateContacts(contacts: Contacts){
  const id = contacts.id;
  const headers = new HttpHeaders({Authorization: 'Basic' + btoa(this.username + ':' + this.password)});
  return this.http.put<Contacts>(this.api_url + '/' + id, contacts, {headers}).pipe(
    map(
      contactData =>{
        return contactData;
      }
    )
  )


}
}
  