import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicControlsComponent } from './basic-controls/basic-controls.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ForSaleControlsComponent } from './for-sale-controls/for-sale-controls.component';
import { AdTitleComponent } from './common-controls/ad-title/ad-title.component';
import { AdDescriptionComponent } from './common-controls/ad-description/ad-description.component';
import { ErrorMessagesPipe } from './pipes/error-messages.pipe';
import { ForSaleByComponent } from './for-sale-controls/for-sale-by/for-sale-by.component';
import { ForSaleSellingForComponent } from './for-sale-controls/for-sale-selling-for/for-sale-selling-for.component';
import { ForSaleConditionsComponent } from './for-sale-controls/for-sale-conditions/for-sale-conditions.component';

@NgModule({
  declarations: [
    BasicControlsComponent,
    ForSaleControlsComponent,
    AdTitleComponent,
    AdDescriptionComponent,
    ErrorMessagesPipe,
    ForSaleByComponent,
    ForSaleSellingForComponent,
    ForSaleConditionsComponent
  ],
  exports: [
    BasicControlsComponent,
    ForSaleControlsComponent,
    AdTitleComponent,
    AdDescriptionComponent,
    ForSaleByComponent,
    ForSaleSellingForComponent,
    ForSaleConditionsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class FormControlsModule { }
