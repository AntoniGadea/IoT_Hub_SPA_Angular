import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Light } from '../light';
import { LightsService } from '../lights.service';

@Component({
  selector: 'app-light-list',
  templateUrl: './light-list.component.html',
  styleUrls: ['./light-list.component.css']
})
export class LightListComponent implements OnInit {

  lights: Light[];
  search: string;

  constructor(private lightService: LightsService, public router: Router) { }

  ngOnInit(): void {
    this.lightService.getLights().subscribe(
      lights => this.lights = lights
    )
  }

}
