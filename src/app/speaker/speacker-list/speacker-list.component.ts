import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Speacker } from '../speacker';
import { SpeackerService } from '../speacker.service';

@Component({
  selector: 'app-speacker-list',
  templateUrl: './speacker-list.component.html',
  styleUrls: ['./speacker-list.component.css']
})
export class SpeackerListComponent implements OnInit {
  
  speakers: Speacker[];
  search: string;

  constructor(public router:Router, private speakerService: SpeackerService) { }

  ngOnInit(): void {
    this.speakerService.getSpeakers().subscribe(
      speakers => this.speakers = speakers
    )
  }

}
