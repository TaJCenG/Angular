import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value:any): number {
    let currentYear:any = new Date().getFullYear();
    let yob:any = new Date(value).getFullYear();
    let age:any = currentYear - yob;
    return age;
  }
}
