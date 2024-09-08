import {
  Component,
  SimpleChanges,
  input, output } from "@angular/core";

export type DropdownOptions = {
  [key: string]: string;
};

@Component({
  selector: "itcorpo-dropdown",
  templateUrl: "./dropdown.component.html",
  styles: [],
  standalone: true,
})
export class DropdownComponent {
  options = input.required<DropdownOptions>();
  // options = input.required<DropdownOptions>();

  entries!: { key: string; value: string }[];

  protected valueChange = output<string>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes.options.currentValue) {
      this.entries = Object.entries(
        changes.options.currentValue as DropdownOptions
      ).map(([key, value]) => ({ key, value }));
    }
  }

  onChange(value: Event) {
    this.valueChange.emit(String(value));
  }
}
