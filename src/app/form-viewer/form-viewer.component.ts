import { Component, OnInit } from '@angular/core';
import { forSaleGroup } from '../formgroups/models/basic-forms-starter';
import { FormGroup} from '@angular/forms';
import { adDescriptionGroup, adTitleFormGroup } from '../form-controls/formGroups';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.css']
})
export class FormViewerComponent implements OnInit {
  parentFormGroup: FormGroup = forSaleGroup; // testing with
  adTitleFormGroup = adTitleFormGroup;
  adDescriptionFormGroup = adDescriptionGroup;

  constructor() { }

  ngOnInit() {
    console.log('forsalegroup in form-viewer component: ', this.parentFormGroup);
  }
}
