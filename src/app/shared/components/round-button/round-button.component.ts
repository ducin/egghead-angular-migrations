import { Component, output } from '@angular/core';

@Component({
    selector: 'itcorpo-round-button',
    template: `<button class="round" (click)="onClickHandle($event)">☰</button>`,
    styles: [`
button.round {
  font-size: 20px;
  color: white;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  border:none;
  outline:none;
  background: black;
  margin: 20px;
  cursor:pointer;
}
  `],
    standalone: true
})
export class RoundButtonComponent {
  clicked = output<Event>();

  onClickHandle(event: Event) {
    this.clicked.emit(event)
  }
}
