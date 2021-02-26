import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Speacker } from './speacker';

@Injectable({
  providedIn: 'root'
})
export class SpeackerService {

  constructor(private http: HttpClient) { }

  speakerUrl: string = 'http://antonigadea.es:3000/speackers/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  getSpeakers(): Observable<Speacker[]>{
    return this.http.get<Speacker[]>(this.speakerUrl);
  }

  editSpeakers(speaker: Speacker): Observable<Speacker>{
    return this.http.put<Speacker>(this.speakerUrl+speaker.id,speaker,this.httpOptions);
  }

  addSpeakers(speaker: Speacker): Observable<Speacker>{
    return this.http.post<Speacker>(this.speakerUrl,speaker,this.httpOptions);
  }

  removeSpeaker(speaker: Speacker): Observable<Speacker>{
    return this.http.delete<Speacker>(this.speakerUrl+speaker.id,this.httpOptions);
  }

}
