import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list = [], filterBy: string, prop: string): any {
    if ( list.length === 0 || prop === '' || prop === 'all') { return list; }
    return list.filter(item => item[filterBy].toLowerCase() === prop.toLowerCase());
  }

}
