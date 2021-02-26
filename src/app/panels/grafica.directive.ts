import { ComponentFactoryResolver, Directive, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { GraphsComponent } from '../components/graphs/graphs.component';
import { GData } from '../interficies/g-data';

@Directive({
  selector: '[appGrafica]'
})
export class GraficaDirective {
  
  graphData: GData[] = [];
  graphRef: any;
  
  @Input() set appMostrarGrafica(graphData: GData[]){
    this.graphData = graphData;
    if (this.graphRef) this.graphRef.instance.graphData = this.graphData;
  }
    
  constructor(
    private templateRef: TemplateRef<any>, // La plantilla del div on anirà la gràfica
    private viewContainer: ViewContainerRef, // El div pare
    private renderer: Renderer2, // utilitat per manipular el DOM
    private componentFR: ComponentFactoryResolver, // per trobar altres components
  ) { }
  
  ngOnInit(): void {

   const viewRef = this.viewContainer.createEmbeddedView(this.templateRef); // creem la plantilla (sempre es fa)
   const primerNode = viewRef.rootNodes[0]; // necessitem accedir al node del DOM creat
   const graphComponent = this.componentFR.resolveComponentFactory(GraphsComponent);

   this.graphRef = this.viewContainer.createComponent(graphComponent);
   this.graphRef.instance.graphData = this.graphData;
   this.renderer.appendChild(primerNode,this.graphRef.location.nativeElement);

  }
}
