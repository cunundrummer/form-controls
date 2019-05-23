import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AD_FOR_SALE_BY_OPTIONS, ForSaleConstants } from '../../constants';

@Component({
  selector: 'app-for-sale-by',
  templateUrl: './for-sale-by.component.html',
  styleUrls: ['./for-sale-by.component.css']
})
export class ForSaleByComponent implements OnInit {
  @Input() attachedToFormGroup: FormGroup;
  readonly adForSaleOptions = new AD_FOR_SALE_BY_OPTIONS();
  readonly forSaleInfo = ForSaleConstants;

  constructor() { }

  ngOnInit() {
  }

  enableNext(event) {
    console.log('value has changed, therefore enable next level of input...');
    this.attachedToFormGroup.controls.sellingFor.enable();
  }
}
