import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'itcorpo-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true
})
export class HomeComponent implements OnInit {
  title = 'IT Corpo';

  constructor() { }

  ngOnInit() {
  }

}
