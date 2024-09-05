import { Component, OnInit, inject } from "@angular/core";

import { Observable } from "rxjs";

import { Employee } from "src/app/api/dto";

import { EmployeesService } from "src/app/api/employees.service";
import { RouterLinkActive, RouterLink } from "@angular/router";
import { LoaderComponent } from "../../shared/components/loader/loader.component";
import { AsyncPipe } from "@angular/common";
import { NameAndTitlePipe } from "../name-and-title.pipe";
import { FlagPipe } from "../flag.pipe";

@Component({
    selector: "itcorpo-employee-listing",
    templateUrl: "./employee-listing.component.html",
    styleUrls: ["./employee-listing.component.css"],
    standalone: true,
    imports: [
        RouterLinkActive,
        RouterLink,
        LoaderComponent,
        AsyncPipe,
        NameAndTitlePipe,
        FlagPipe,
    ],
})
export class EmployeeListingComponent implements OnInit {
  private employeeSvc = inject(EmployeesService);

  employees$!: Observable<Employee[]>;

  ngOnInit() {
    this.employees$ = this.employeeSvc.getAllEmployees();
  }
}
