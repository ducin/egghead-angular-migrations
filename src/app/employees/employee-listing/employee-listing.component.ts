import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Employee } from 'src/app/api/dto';

import { EmployeesService } from 'src/app/api/employees.service';

@Component({
  selector: 'itcorpo-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css']
})
export class EmployeeListingComponent implements OnInit {
  employees$!: Observable<Employee[]>

  sidebarCollapsed: boolean = true

  cities = {
    "Wilno": "Wilno",
    "Lwów": "Lwów",
  }

  constructor(
    private employeeSvc: EmployeesService,
  ) { }

  ngOnInit() {
    this.employees$ = this.employeeSvc.getAllEmployees()
    // this.employees$ = this.employeeSvc.getAllEmployees({ nationality: "PL" })
    // this.employees$ = this.employeeSvc.getAllEmployees({ office_like: "Poland" })
    // this.employees$ = this.employeeSvc.getAllEmployees({ office_like: "Łódź" })
  }

  onToggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed
  }
}
