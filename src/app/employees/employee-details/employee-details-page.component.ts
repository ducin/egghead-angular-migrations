import { Component, inject } from '@angular/core';
import { Employee } from 'src/app/api/dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'itcorpo-employee-details-page',
  template: `<itcorpo-employee-details [employee]="employee"></itcorpo-employee-details>`
})
export class EmployeeDetailsPageComponent {
  private route = inject(ActivatedRoute);

  employee!: Employee

  ngOnInit(): void {
    this.employee = this.route.snapshot.data.employee
  }
}
