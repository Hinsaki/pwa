import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdIconModule,
  MdButtonModule,
  MdListModule,
  MdToolbarModule,
  MdTooltipModule,
  MdSidenavModule,
  MdCardModule,
  MdGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    FlexLayoutModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdToolbarModule,
    MdTooltipModule,
    MdSidenavModule,
    MdCardModule,
    MdGridListModule
  ],
  exports: [
    FlexLayoutModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdToolbarModule,
    MdTooltipModule,
    MdSidenavModule,
    MdCardModule,
    MdGridListModule
  ]
})
export class CustomMaterialModule { }
