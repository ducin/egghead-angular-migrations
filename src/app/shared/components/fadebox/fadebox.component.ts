import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'itcorpo-fadebox',
    template: `<div class="fade-box" [ngClass]="{'fade-in': !currentlyFadeOut, 'fade-out': currentlyFadeOut}">
  <ng-content></ng-content>
</div>
`,
    styleUrls: ['./fadebox.component.css'],
    standalone: true,
    imports: [NgClass]
})
export class FadeboxComponent implements OnInit {

  public fadeOutON = false
  public currentlyFadeOut = true

  constructor() {}

  ngOnInit() {
    if (this.fadeOutON){
      setInterval(() => this.currentlyFadeOut = !this.currentlyFadeOut, 3000)
    }
  }

}
