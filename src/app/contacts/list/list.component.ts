import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/service/contacts/contacts.service';
import { Contacts } from '../../models/contacts';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListContactsComponent implements OnInit {
  collection = {count: 600, data:[]};
  config = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: this.collection.count

  };
  contactLits: Contacts[];
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public responsive: boolean = true;
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel:'Próximo'

  };
    constructor(public contactService: ContactsService, public router: Router) { }


  ngOnInit(): void {
    //this.populateElements();
    this.getContacts();

    }
  

//Metodo para popular os elementos da tabela com dados mocados  
  //populateElements(){
    //for (let i= 0; i <this.collection.count; i++){
     // this.collection.data.push({
       // posicao: i +1,
       // nome: 'teste' + i,
        //email: 'email' + i + '@contacttura.com',
        //fone: '(' + 0 + 1 + ')' + i + i + i + i + i + '-' + i + i + i + i 
      //})
   // }

 // }
//Metodo responsavel pelo troca de paginas
  onPageChange(event){
    this.config.currentPage = event;

  }
getContacts() {
    (this.contactService.getContacts().subscribe(
      data => {
        this.contactLits = data;
        this.config.totalItems = this.contactLits.length;
      },
      error =>{
        Swal.fire({
          icon: 'error',
          title: 'Oopss....',
          text: 'Erro no retorno da requisição',
        });
      }
    )
    );
  }

  deleteContacts(id: number){
    this.contactService.deleteContacts(id).subscribe(
      data =>{
        Swal.fire({
          icon: 'success',
          title: 'Ooopss....',
          text: 'Contato deletado com sucesso',
        });
        this.getContacts();
      },
      error =>{
        Swal.fire({
          icon: 'error',
          title: 'Ooopss....',
          text: 'Erro no retorno da requisição',
        });
      }
    )
  }
  
editContacts(contacts: Contacts){
  this.contactService.getContactsForList(contacts);
  this.router.navigate(['/contacts-create-edit']);
}

find(id: number){
  this.contactService.findContactsById(id).subscribe(
    data => {
      console.log(data);
    },
    error =>{
    Swal.fire({
      icon: 'error',
      title: 'Ooopss...',
      text: 'Erro no retorno da requisição!!',
      });
    } 
  )
}

}
