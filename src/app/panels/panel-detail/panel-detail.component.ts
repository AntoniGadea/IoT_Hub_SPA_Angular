import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Panel } from '../panel';
import { PanelsService } from '../panels.service';

@Component({
  selector: 'app-panel-detail',
  templateUrl: './panel-detail.component.html',
  styleUrls: ['./panel-detail.component.css']
})
export class PanelDetailComponent implements OnInit {
  
  panel: Panel;

  constructor(private activatedRoute: ActivatedRoute, private panelsService: PanelsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      this.panelsService.getPanel(p.id).subscribe( p => this.panel = p);
    })
  }

}
