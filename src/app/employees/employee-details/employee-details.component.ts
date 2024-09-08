import { Component, input } from "@angular/core";
import { Employee } from "src/app/api/dto";
import { EmployeeImageComponent } from "../employee-image";
import { CurrencyPipe, DatePipe } from "@angular/common";

@Component({
  selector: "itcorpo-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"],
  standalone: true,
  imports: [EmployeeImageComponent, CurrencyPipe, DatePipe],
})
export class EmployeeDetailsComponent {
  employee = input.required<Employee>();
}
