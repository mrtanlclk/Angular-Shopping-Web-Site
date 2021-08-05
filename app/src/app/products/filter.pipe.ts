import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any, term: any): any {
    if(term === undefined) return products;
    return products.filter(function(product:any){
      return product.name.toLowerCase().includes(term.toLowerCase())
    })

  }

}
