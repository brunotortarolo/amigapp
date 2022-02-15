import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reel'
})
export class ReelPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
