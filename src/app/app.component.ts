import { Component, inject } from "@angular/core";

import { Observable } from "rxjs";

import { GeoService } from "./api/geo.service";
import { Nationality } from "src/app/api/dto";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from "@angular/router";
import { AsyncPipe } from "@angular/common";
import { FadeboxComponent } from "./shared/components/fadebox/fadebox.component";
import { DropdownComponent } from "./shared/components/dropdown/dropdown.component";

@Component({
  selector: "itcorpo-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    AsyncPipe,
    FadeboxComponent,
    DropdownComponent,
  ],
})
export class AppComponent {
  private geoSvc = inject(GeoService);

  title = "IT Corpo Angular App";

  geoData$!: Observable<{ [k: string]: string }>;

  ngOnInit(): void {
    this.geoData$ = this.geoSvc.getGeo();
  }
}
