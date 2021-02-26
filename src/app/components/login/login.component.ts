import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { logWarnings } from 'protractor/built/driverProviders';
import { AuthService } from 'src/app/user/auth.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userForm: User = {login: "", passwd: ""};
  userLoged: User =  {login: "", passwd: ""};
  remember: boolean;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
      this.remember = Boolean(localStorage.getItem('login'));
      if (this.remember) this.userForm.login = localStorage.getItem('login');
  }

  login($event){
    this.auth.authUser(this.userForm).subscribe(
      //If Status OK
        ress => { ress.map( u => this.userLoged = u); 
          if(this.userLoged.login.length >0){
            localStorage.setItem('token',this.userLoged.token);
            this.router.navigate(['/home']);
          }
          this.clearDataUser();
          },
      //If Status error
        err => console.log('HTTP Error', err),
    );
  }
  
  setRemember(): void{
    if(!this.remember) localStorage.removeItem('login'); 
  }
  
  clearDataUser(){
    this.userForm.login = "";
    this.userForm.passwd = "";
  }

}
