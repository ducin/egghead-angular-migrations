import { Component, Input } from '@angular/core';

import { Employee } from 'src/app/api/dto';
import { apiURL } from 'src/app/api/config';
import { ImageComponent } from '../shared/components/image/image.component';

@Component({
    selector: 'itcorpo-employee-image',
    template: `<itcorpo-image [src]="url()"></itcorpo-image>`,
    standalone: true,
    imports: [ImageComponent]
})
export class EmployeeImageComponent {
  @Input()
  employee!: Employee

  url(){
    return `${apiURL}/images/avatars/${this.employee.imgURL}`
  }
}
