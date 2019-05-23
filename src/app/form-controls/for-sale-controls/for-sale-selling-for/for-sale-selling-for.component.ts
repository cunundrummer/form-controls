import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ForSaleConstants } from '../../constants';
import { BehaviorSubject } from 'rxjs';

export interface IPrice {
  currentPrice: number;
  prevPrice: number;
}
@Component({
  selector: 'app-for-sale-selling-for',
  templateUrl: './for-sale-selling-for.component.html',
  styleUrls: ['./for-sale-selling-for.component.css']
})
export class ForSaleSellingForComponent implements OnInit {
  @Input() attachedToFormGroup: FormGroup;
  @Input() disabled: boolean;
  @ViewChild('askingPrice') askingPrice: ElementRef<HTMLInputElement>;
  price: IPrice = {
    currentPrice: 0,
    prevPrice: 0
  };
  readonly forSaleInfo = ForSaleConstants.sellingFor;

  constructor() { }

  ngOnInit() {
    console.log('inspecting formgroup forSale', this.attachedToFormGroup);

  }

  handleSellingForOption(event) {
    console.log('logging event change...', event);
    if (event.value === 'free') {
      this.price.prevPrice = this.price.currentPrice;
      this.price.currentPrice = 0;
      this.attachedToFormGroup.controls.sellingForPrice.patchValue(this.price.currentPrice);
    } else {
      this.price.prevPrice = this.price.currentPrice;
    }
  }

}
