import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicControlsComponent } from './basic-controls/basic-controls.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ForSaleControlsComponent } from './for-sale-controls/for-sale-controls.component';

@NgModule({
  declarations: [
    BasicControlsComponent,
    ForSaleControlsComponent
  ],
  exports: [
    BasicControlsComponent,
    ForSaleControlsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class FormControlsModule { }
