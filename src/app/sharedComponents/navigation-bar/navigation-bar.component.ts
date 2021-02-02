import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private router: Router) { }
  admin = 'false';

  ngOnInit(): void {
    console.log('teste');
    this.putEvents();
    this.admin = localStorage.getItem('admin');
  }

  putEvents(){
    const menuDesktop = document.getElementById('desktop-menu');
    const navBarToggle = document.getElementById('toggle-action');
    //tslint:disable-next-line: onli-arrow-fictions
    navBarToggle.addEventListener('click', function(){
      menuDesktop.classList.toggle('active');
  });
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
