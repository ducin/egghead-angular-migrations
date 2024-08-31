import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/api/dto';

@Component({
  selector: 'itcorpo-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  @Input()
  employee!: Employee
}
