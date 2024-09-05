import { Component, OnInit, inject } from '@angular/core';
import { OfficesService } from 'src/app/api/offices.service';

import { Observable } from 'rxjs';

import { Office } from 'src/app/api/dto';

@Component({
  selector: 'itcorpo-office-listing',
  templateUrl: './office-listing.component.html',
  styleUrls: ['./office-listing.component.css']
})
export class OfficeListingComponent implements OnInit {
  private officeSvc = inject(OfficesService);

  offices$!: Observable<Office[]>

  ngOnInit() {
    this.offices$ = this.officeSvc.getAllOffices()
    // this.offices$ = this.officeSvc.getAllOffices('Poland')
  }

}
