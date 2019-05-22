import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicControlsComponent } from './basic-controls/basic-controls.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ForSaleControlsComponent } from './for-sale-controls/for-sale-controls.component';
import { AdTitleComponent } from './common-controls/ad-title/ad-title.component';
import { AdDescriptionComponent } from './common-controls/ad-description/ad-description.component';
import { ErrorMessagesPipe } from './pipes/error-messages.pipe';

@NgModule({
  declarations: [
    BasicControlsComponent,
    ForSaleControlsComponent,
    AdTitleComponent,
    AdDescriptionComponent,
    ErrorMessagesPipe
  ],
  exports: [
    BasicControlsComponent,
    ForSaleControlsComponent,
    AdTitleComponent,
    AdDescriptionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class FormControlsModule { }
