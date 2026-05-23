import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
})
export class TitlePipe implements PipeTransform {
  transform(name: string, gender:string): string {
    if(gender.toLocaleLowerCase() === 'male'){
      return 'Mr. ' + name;
    }
    else  
    return 'Ms. ' + name;
  }
}
