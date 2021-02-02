import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //Grupo de contoladores de formularios para login
    loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required],)

  });
  constructor(public router: Router) {}
  ngOnInit(): void {

  }
  login(){
    if(this.loginForm.valid){
      localStorage.setItem('token', 'functurasupertipmelhor');
      localStorage.setItem('admin', 'true');
      localStorage.setItem('username', this.loginForm.get('username').value);
      localStorage.setItem('password', this.loginForm.get('password').value);
      this.router.navigate(['/contacts-list']);
    }
    else{
      Swal.fire({
        icon:'error',
        title:'Oops...',
        text: 'Login ou senha inválidos!',
      });
    }
  }
}
