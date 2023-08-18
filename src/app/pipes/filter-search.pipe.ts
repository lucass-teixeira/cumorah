import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../shared/models';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {


  transform(array: Student[], args: string): Student[] {
    const newValue = args.trim().toLowerCase();
    const newStudents = array.filter(x => x.nickname.toLowerCase().includes(newValue))

    return newStudents;
  }

}
