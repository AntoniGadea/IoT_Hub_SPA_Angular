import { Component, Input, OnInit } from '@angular/core';
import { faLightbulb, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { LightsService } from '../lights.service';
import { Light } from '../light';
import { Router } from '@angular/router';

@Component({
  selector: 'app-light-item',
  templateUrl: './light-item.component.html',
  styleUrls: ['./light-item.component.css']
})
export class LightItemComponent implements OnInit {
  
  @Input() light: Light;
  icon = faLightbulb;
  close = faWindowClose;
  
  constructor(private lightsService: LightsService, public router: Router) { }

  ngOnInit(): void {
  }

  delete(){
    this.lightsService.removeLight(this.light).subscribe();
    setTimeout(()=>{
      this.router.navigate(['/home']);
    },1000);
  }

}
