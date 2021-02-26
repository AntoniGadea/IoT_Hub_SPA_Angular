import { Pipe, PipeTransform } from '@angular/core';
import { Panel } from './panel';

@Pipe({
  name: 'searchPanel'
})
export class SearchPanelPipe implements PipeTransform {

  transform(data: any[], search: string): any[] {
    search = search ? search.toLocaleLowerCase() : null;
    data = search ? data.filter( p => p.name.toLocaleLowerCase().includes(search)) : data;
    return data;
  }

}
