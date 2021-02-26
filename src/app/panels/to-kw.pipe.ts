import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKw'
})
export class ToKwPipe implements PipeTransform {

  transform(value: number): string {
    return `${value}W: ${value/1000}KW`;
  }

}
