import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditUsersComponent implements OnInit {

  createEditUserForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    admin: new FormControl(''),
  });

  checked = false;
  constructor(public router: Router) { }

ngOnInit(): void {
}

createUser(){
  if(this.createEditUserForm.valid){
    Swal.fire({
      icon:'success',
      title: 'Confirmed!!!',
      text: 'Salvo com sucesso',
    });
    this.router.navigate(['/users-list']);
}else{
    Swal.fire({
      icon: 'error',
      title: 'OOoooppsss....',
      text: 'Peencha todos os campos corretamente!',
      });
      //this.router.navigate(["/users-create-edit"])
    }
}
}