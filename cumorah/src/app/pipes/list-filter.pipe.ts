import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../shared/models';
import { filter } from 'rxjs';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    const quantity: number = Number(args[0]);
    const searchIndexTxt: string = args[1]?.toString();
    const filterTxt: string = args[2].toString();


    const finalList = this.callbackReturn(value,searchIndexTxt,filterTxt)
    const shortenedList = finalList.slice(0 ,quantity)
    return shortenedList;
  }

  callbackReturn(array: any[], searchIndex: string, filterText: string): any[] {
    const filtered = array.filter(x => x[searchIndex]?.toLowerCase().includes(filterText.toLowerCase()))
    return filtered;
  }

}
