import { Pipe, PipeTransform } from '@angular/core';
import { Light } from './light';

@Pipe({
  name: 'searchLight'
})
export class SearchLightPipe implements PipeTransform {

  transform(lights: Light[], search: string): Light[] {
    search = search ? search.toLocaleLowerCase() : null;
    lights = search ? lights.filter( p => p.name.toLocaleLowerCase().includes(search)) : lights;
    return lights;
  }

}
