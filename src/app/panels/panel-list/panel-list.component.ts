import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Panel } from '../panel';
import { PanelsService } from '../panels.service';

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.css']
})
export class PanelListComponent implements OnInit {
  
  panels: Panel[];
  search: string = '';

  constructor(private panelsService: PanelsService, public router: Router) { }

  ngOnInit(): void {
    this.panelsService.getPanels().subscribe(
      panels => this.panels = panels
    )
  }

}
