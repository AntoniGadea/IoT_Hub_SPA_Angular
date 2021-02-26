import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faVolumeUp, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Speacker } from '../speacker';
import { SpeackerService } from '../speacker.service';

@Component({
  selector: 'app-speacker-item',
  templateUrl: './speacker-item.component.html',
  styleUrls: ['./speacker-item.component.css']
})
export class SpeackerItemComponent implements OnInit {

@Input() speaker: Speacker;
icon = faVolumeUp;
close = faWindowClose;

  constructor(private speakerService: SpeackerService, public router: Router) { }

  ngOnInit(): void {
    console.log(this.speaker);
  }
  
  delete(){
    this.speakerService.removePanel(this.speaker).subscribe();
    setTimeout(()=>{
      this.router.navigate(['/home']);
    },1000);
  }

}
