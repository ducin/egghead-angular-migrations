import { Component, Input } from '@angular/core';

import { Office } from 'src/app/api/dto';
import { OfficeImageComponent } from './office-image';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'itcorpo-office-details',
    templateUrl: './office-details.component.html',
    standalone: true,
    imports: [OfficeImageComponent, CurrencyPipe]
})
export class OfficeDetailsComponent {
  @Input()
  office!: Office
}
