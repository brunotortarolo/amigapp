import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail',
})
export class ThumbnailPipe implements PipeTransform {
  baseURL: string = 'assets/img/thumbnails';

  transform(filename: string): string {
    let finalURL: string = `${this.baseURL}${filename}`;
    return finalURL;
  }
}
