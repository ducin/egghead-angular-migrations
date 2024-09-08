import { Component, input } from "@angular/core";

@Component({
  selector: "itcorpo-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
  standalone: true,
})
export class TableComponent {
  headers = input.required<string[]>();

  rows = input.required<string[][]>();
}
