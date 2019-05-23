import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ForSaleConditionConstants } from '../../constants';

@Component({
  selector: 'app-for-sale-conditions',
  templateUrl: './for-sale-conditions.component.html',
  styleUrls: ['./for-sale-conditions.component.css']
})
export class ForSaleConditionsComponent implements OnInit {
  @Input() attachedToFormGroup: FormGroup;
  conditions = ForSaleConditionConstants[0].category.conditionType;

  constructor() { }

  ngOnInit() {
    console.log('loading conditions for clothing/wearables...', this.conditions);
  }

}
