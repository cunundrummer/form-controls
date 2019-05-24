import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ForSaleConditionConstants } from '../../constants';

@Component({
  selector: 'app-for-sale-conditions',
  templateUrl: './for-sale-conditions.component.html',
  styleUrls: ['./for-sale-conditions.component.css']
})
export class ForSaleConditionsComponent implements OnInit {
  @Input() attachedToFormGroup: FormGroup;
  conditions = ForSaleConditionConstants[0].category.conditionTypes;
  get conditionControl() {
    return this.attachedToFormGroup.controls.condition as FormControl;
  }
  get hasDefectControl() {
    return this.attachedToFormGroup.controls.hasDefect as FormControl;
  }
  constructor() { }

  ngOnInit() {
    console.log('loading conditions for clothing/wearables...', this.conditions);
  }

}
