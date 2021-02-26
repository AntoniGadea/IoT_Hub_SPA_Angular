import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Panel } from './panel';
import { PanelsService } from './panels.service';

@Injectable({
  providedIn: 'root'
})
export class PanelResolveService implements Resolve<Panel> {

  constructor(private panelsService: PanelsService, private router: Router) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Panel | Observable<Panel>{
    return this.panelsService.getPanel(route.params.id).pipe(
      catchError(error => {this.router.navigate(['/panels']);
      return of(null);
    })
    )
  }
}
