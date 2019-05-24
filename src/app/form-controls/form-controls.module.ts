import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdTitleComponent } from './common-controls/ad-title/ad-title.component';
import { AdDescriptionComponent } from './common-controls/ad-description/ad-description.component';
import { ErrorMessagesPipe } from './pipes/error-messages.pipe';
import { ForSaleByComponent } from './for-sale-controls/for-sale-by/for-sale-by.component';
import { ForSaleSellingForComponent } from './for-sale-controls/for-sale-selling-for/for-sale-selling-for.component';
import { ForSaleConditionsComponent } from './for-sale-controls/for-sale-conditions/for-sale-conditions.component';
import { TextWithSelectComponent } from './for-sale-controls/text-with-select/text-with-select.component';

@NgModule({
  declarations: [
    AdTitleComponent,
    AdDescriptionComponent,
    ErrorMessagesPipe,
    ForSaleByComponent,
    ForSaleSellingForComponent,
    ForSaleConditionsComponent,
    TextWithSelectComponent
  ],
  exports: [
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
