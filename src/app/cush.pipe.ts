import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cush'
})
export class CushPipe implements PipeTransform {

  transform(prix:number): string {
    return prix +' €';
  }

}
