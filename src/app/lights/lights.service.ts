import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Light } from './light';

@Injectable({
  providedIn: 'root'
})

export class LightsService {

  constructor(private http: HttpClient) { }

  lightsUrl: string = "http://antonigadea.es:3000/lights/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  getLights(): Observable<Light[]>{
    return this.http.get<Light[]>(this.lightsUrl)
  }

  getLight(id: string): Observable<Light>{
    return this.http.get<Light>(this.lightsUrl+id);
  }

  editLight(light: Light): Observable<Light>{
    return this.http.put<Light>(this.lightsUrl+light.id,light,this.httpOptions);
  }

  addLight(light: Light): Observable<Light>{
    return this.http.post<Light>(this.lightsUrl,light,this.httpOptions);
  }

  removeLight(light: Light): Observable<Light>{
    return this.http.delete<Light>(this.lightsUrl+light.id,this.httpOptions);
  }
}
