// https://www.w3schools.com/howto/howto_js_collapse_sidepanel.asp

import { Component, input, output } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
  selector: "itcorpo-sidebar",

  template: `
    <div
      id="mySidebar"
      class="sidebar"
      [ngClass]="{ collapsed: collapsed() }"
    >
      <a class="closebtn" (click)="onCloseClick()">×</a>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ["./sidebar.component.css"],
  standalone: true,
  imports: [NgClass],
})
export class SidebarComponent {
  collapsed = input.required<boolean>(true);

  collapsedChange = output<boolean>();

  onCloseClick() {
    this.collapsed() = true;
    this.collapsedChange.emit(true);
  }
}
