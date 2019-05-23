import { Component, OnInit } from '@angular/core';
import {
  adDescriptionGroup,
  adTitleFormGroup,
  forSaleByGroup,
  forSaleConditionsGroup
} from '../form-controls/formGroups';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.css']
})
export class FormViewerComponent implements OnInit {
  adTitleFormGroup = adTitleFormGroup;
  adDescriptionFormGroup = adDescriptionGroup;
  adForSaleFormGroup = forSaleByGroup;
  adForSaleConditionGroup = forSaleConditionsGroup;

  constructor() { }

  ngOnInit() {}
}
