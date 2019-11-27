import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'promo'
})
export class PromoPipe implements PipeTransform {

  transform(prix:number): number {
    return  prix-(prix*30/100);
  }

}
