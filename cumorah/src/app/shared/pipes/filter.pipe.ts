import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models';

@Pipe({
  name: 'filterSearch'
})
export class FilterPipe implements PipeTransform {

  transform(value: Student[], ...args: string[]): unknown {
    const newValue = args[0].toString().trim().toLowerCase();
    console.log('valor novo', value)
    const newStudents = value.filter(x => x.nickname.toLowerCase().includes(newValue))

    return newStudents;
  }

}
