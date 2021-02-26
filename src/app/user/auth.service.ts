import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  userUrl: string = "http://antonigadea.es:3001/users"

  constructor(private http: HttpClient) { }

  authUser(user: User): Observable<User[]>{
    
    return this.http.get<User[]>(this.userUrl).pipe(
      map( r => r.filter(u => u.login === user.login))
     );
  }

  isAuth(): boolean{
    return (localStorage.getItem('token') != undefined && localStorage.getItem('token').length > 2 );
  }

  logOut(): void{
    localStorage.removeItem('token');
  }
}
