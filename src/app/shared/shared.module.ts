import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ImageComponent } from './components/image/image.component';
import { LoaderComponent } from './components/loader/loader.component';
import { OverlayComponent } from './components/overlay/overlay';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RoundButtonComponent } from './components/round-button/round-button.component';
import { FadeboxComponent } from './components/fadebox/fadebox.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    DropdownComponent,
    ImageComponent,
    LoaderComponent,
    OverlayComponent,
    SidebarComponent,
    RoundButtonComponent,
    FadeboxComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DropdownComponent,
    ImageComponent,
    LoaderComponent,
    OverlayComponent,
    SidebarComponent,
    RoundButtonComponent,
    FadeboxComponent,
    TableComponent,
  ],
})
export class SharedModule { }
