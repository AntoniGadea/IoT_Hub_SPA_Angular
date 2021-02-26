import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Light } from '../light';
import { LightsService } from '../lights.service';

@Component({
  selector: 'app-light-detail',
  templateUrl: './light-detail.component.html',
  styleUrls: ['./light-detail.component.css']
})
export class LightDetailComponent implements OnInit {
  
  light: Light;

  constructor(private activatedRoute: ActivatedRoute, private lightsService:LightsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      this.lightsService.getLight(p.id).subscribe( p => this.light = p);
    })
  }

}
