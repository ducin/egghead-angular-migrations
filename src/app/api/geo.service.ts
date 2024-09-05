import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { apiURL } from './config';
import { Geo } from 'src/app/api/dto';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  private http = inject(HttpClient);


  getGeo() {
    return this.http.get<Geo>(`${apiURL}/geo?`)
  }
}
