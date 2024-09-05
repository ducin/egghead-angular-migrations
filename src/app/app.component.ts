import { Component, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { GeoService } from './api/geo.service';
import { Nationality } from 'src/app/api/dto';

@Component({
  selector: 'itcorpo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private geoSvc = inject(GeoService);


  title = 'IT Corpo Angular App'

  geoData$!: Observable<{ [k: string]: string }>

  ngOnInit(): void {
    this.geoData$ = this.geoSvc.getGeo()
  }
}
