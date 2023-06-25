import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkedin'
})
export class LinkedinPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const newValue = value.replace('https://www.linkedin.com/in/', 'linkedin/')
    return newValue;
  }

}
