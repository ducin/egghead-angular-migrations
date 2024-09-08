import { Component, input } from "@angular/core";

import { Office } from "src/app/api/dto";
import { apiURL } from "src/app/api/config";
import { ImageComponent } from "../../shared/components/image/image.component";

@Component({
  selector: "itcorpo-office-image",
  template: `<itcorpo-image [src]="url()"></itcorpo-image>`,
  standalone: true,
  imports: [ImageComponent],
})
export class OfficeImageComponent {
  office = input.required<Office>();

  url() {
    return `${apiURL}/images/offices/${
      this.office().imgURL
    }`;
  }
}
