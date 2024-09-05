import { Component, Input } from "@angular/core";
import { Benefit } from "src/app/api/dto";
import { CurrencyPipe, DatePipe } from "@angular/common";

@Component({
  selector: "itcorpo-benefit-details",
  templateUrl: "./benefit-details.component.html",
  styleUrls: ["./benefit-details.component.css"],
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
})
export class BenefitDetailsComponent {
  @Input()
  benefit!: Benefit;
}
