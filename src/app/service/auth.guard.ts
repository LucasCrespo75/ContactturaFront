import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      if(localStorage.getItem('token') != null){
        return true;
  }else{
    this.router.navigate(['/login']);

  }
  }
  
}

@Injectable({
  providedIn: 'root'
})
  
  //Guardiao de rotas para adimistrador'
  export class AuthAdminGuard implements CanActivate {
    constructor(private router: Router){}
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | boolean{
        if(localStorage.getItem('adimin') == 'true' && localStorage.getItem('token') != null){
          return true;
        }

        else{
          this.router.navigate(['/login']);
        }
      }
  }

