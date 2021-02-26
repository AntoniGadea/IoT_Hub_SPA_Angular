import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMoreInfo]'
})
export class MoreInfoDirective {

  constructor(private e: ElementRef, private r: Renderer2) { }
  
  @Input() show: any;

  @HostListener('mouseenter')
  enterMouse(){
    this.r.setStyle(this.show,'display','');
  }

  @HostListener('mouseleave')
  leaveMouse(){
    this.r.setStyle(this.show,'display','none');
  }
}
