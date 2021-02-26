import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Panel } from './panel';
import { map,filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PanelsService {

  constructor(private http: HttpClient) { }
  
  panelUrl: string = 'http://antonigadea.es:3000/panels/';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getPanels(): Observable<Panel[]>{
    return this.http.get<Panel[]>(this.panelUrl);
  }

  getPanel(id: string): Observable<Panel>{
    return this.http.get<Panel>(this.panelUrl+id);
  }

  editPanel(panel: Panel): Observable<Panel>{
    return this.http.put<Panel>(this.panelUrl+panel.id,panel,this.httpOptions);
  }

  addPanel(panel: Panel): Observable<Panel>{
    return this.http.post<Panel>(this.panelUrl,panel,this.httpOptions);
  }

  removePanel(panel: Panel): Observable<Panel>{
    return this.http.delete<Panel>(this.panelUrl+panel.id,this.httpOptions);
  }
}
