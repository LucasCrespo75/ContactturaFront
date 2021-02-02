import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListUsersComponent implements OnInit {
  collection = {count: 600, data:[]};
  config = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: this.collection.count

  };
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public responsive: boolean = true;
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel:'Próximo'
  };
    constructor(public router: Router) { }


  ngOnInit(): void {
    this.populateElements();

    }

//Metodo para popular os elementos da tabela com dados mocados  
  populateElements(){
    for (let i= 0; i <this.collection.count; i++){
      this.collection.data.push({
        posicao: i +1,
        nome: 'teste' + i,
        email: 'email' + i + '@gmail.com',
        fone: '(' + 0 + 1 + ')' + i + i + i + i + i + '-' + i + i + i + i 
      })
    }

  }
//Metodo responsavel pelo troca de paginas
  onPageChange(event){
    this.config.currentPage = event;
  }
}