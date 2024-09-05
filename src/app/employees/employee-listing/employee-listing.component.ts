import { Component, OnInit, inject } from "@angular/core";

import { Observable } from "rxjs";

import { Employee } from "src/app/api/dto";

import { EmployeesService } from "src/app/api/employees.service";

@Component({
  selector: "itcorpo-employee-listing",
  templateUrl: "./employee-listing.component.html",
  styleUrls: ["./employee-listing.component.css"],
})
export class EmployeeListingComponent implements OnInit {
  private employeeSvc = inject(EmployeesService);

  employees$!: Observable<Employee[]>;

  ngOnInit() {
    this.employees$ = this.employeeSvc.getAllEmployees();
  }
}
