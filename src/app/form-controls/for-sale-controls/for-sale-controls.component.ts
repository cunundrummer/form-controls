import { Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName } from '@angular/forms';
import { ForSaleConstants } from '../constants';

@Component({
  selector: 'app-for-sale-controls',
  templateUrl: './for-sale-controls.component.html',
  styleUrls: ['./for-sale-controls.component.css']
})
export class ForSaleControlsComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;
  @ViewChild('askingPrice', {read: ElementRef}) askingPrice: ElementRef<HTMLInputElement>;
  forSaleInfo = ForSaleConstants;
  price = {
    currentPrice: 0,
    oldPrice: 0,
  };

  constructor() { }

  ngOnInit() {
    console.log('received formgroup from parent: ', this.parentFormGroup);
    console.log('controls: ', this.parentFormGroup.controls);
  }

  handleSellingForOption(event) {
    console.log('logging event change...', event);
    if (event.value === 'free') {
      this.price.oldPrice = this.price.currentPrice;
      this.price.currentPrice = 0;
    } else {
      const RADIX = 10; // in case of using parseInt method
      this.price.oldPrice = this.price.currentPrice;

    }
  }

}
