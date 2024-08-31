import { Pipe, PipeTransform } from '@angular/core';

import { Employee } from 'src/app/api/dto';

@Pipe({
  name: 'nameAndTitle'
})
export class NameAndTitlePipe implements PipeTransform {

  transform(e: Employee, args?: any): string {
    return `${ e.firstName } ${ e.lastName }, ${ e.title }`
  }

}
