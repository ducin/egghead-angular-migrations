import { Component, OnInit, inject } from "@angular/core";
import { BenefitsService } from "src/app/api/benefits.service";

import { Observable } from "rxjs";

import { Benefit } from "src/app/api/dto";

import { AsyncPipe } from "@angular/common";
import { BenefitDetailsComponent } from "../benefit-details/benefit-details.component";

@Component({
  standalone: true,
  imports: [AsyncPipe, BenefitDetailsComponent],
  selector: "itcorpo-benefit-listing",
  templateUrl: "./benefit-listing.component.html",
  styleUrls: ["./benefit-listing.component.css"],
})
export class BenefitListingComponent implements OnInit {
  private benefitSvc = inject(BenefitsService);

  benefits$!: Observable<Benefit[]>;

  ngOnInit() {
    this.benefits$ = this.benefitSvc.getAllBenefits();
  }
}
