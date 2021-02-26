import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    
  login: boolean = false;

  constructor(private auth: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe( event => {
      if (event.constructor.name === "NavigationEnd"){
        this.login = this.auth.isAuth();
        console.log(this.login);      }
    })
  }
  
  logOut(){
    this.auth.logOut();
    this.router.navigate(['/login']);
  }
}
