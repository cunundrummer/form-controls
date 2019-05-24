import { Component, OnInit } from '@angular/core';
import {
  adDescriptionGroup,
  adTitleFormGroup,
  forSaleByGroup,
  forSaleConditionsGroup
} from '../formgroups/formGroups';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.css']
})
export class FormViewerComponent implements OnInit {
  allGroup: FormArray;
  adTitleFormGroup = adTitleFormGroup;
  adDescriptionFormGroup = adDescriptionGroup;
  adForSaleFormGroup = forSaleByGroup;
  adForSaleConditionGroup = forSaleConditionsGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.allGroup = this.fb.array([
      this.adTitleFormGroup,
      this.adDescriptionFormGroup,
      this.adForSaleFormGroup,
      this.adForSaleConditionGroup
    ]);
  }
}
