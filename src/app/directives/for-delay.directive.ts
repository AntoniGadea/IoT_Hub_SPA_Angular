import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appForDelay]'
})
export class ForDelayDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
  
  items: Array<number> = [];

  @Input()
  set appForDelayOf(array: number[]){
    this.items = array;
    this.items.forEach(
      n => {
        setTimeout(()=>{
          this.viewContainer.createEmbeddedView(this.templateRef, {$implicit: n})
        },200)
      }
    );
  }
}
