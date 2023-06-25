import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../shared/models';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    const filterTxt: string = args[0].toString();
    const searchIndexTxt: string = args[1]?.toString()

    const finalList = this.callbackReturn(value,searchIndexTxt,filterTxt)
    const shortenedList = finalList.slice(0 ,args[0])
    return shortenedList;
  }

  callbackReturn(array: any[], searchIndex: string, filterText: string): any[] {
    const filtered = array.filter(x => x[searchIndex].toLowerCase()?.includes(filterText.toLowerCase()))
    return filtered;
  }

}
