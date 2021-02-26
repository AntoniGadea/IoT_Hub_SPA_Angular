import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Panel } from '../panel';
import { PanelsService } from '../panels.service';

@Component({
  selector: 'app-panel-item',
  templateUrl: './panel-item.component.html',
  styleUrls: ['./panel-item.component.css']
})
export class PanelItemComponent implements OnInit {
  
  @Input() panel: Panel;
  close = faWindowClose;
  constructor(private panelsService: PanelsService, public router: Router) { }

  ngOnInit(): void {
  }
  
  delete(){
    this.panelsService.removePanel(this.panel).subscribe();
    setTimeout(()=>{
      this.router.navigate(['/home']);
    },1000);
  }
}
