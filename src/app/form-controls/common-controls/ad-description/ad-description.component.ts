import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AD_DESCRIPTION_OPTIONS } from '../../constants';

@Component({
  selector: 'app-ad-description',
  templateUrl: './ad-description.component.html',
  styleUrls: ['./ad-description.component.css']
})
export class AdDescriptionComponent implements OnInit {
  @Input() attachedToFormGroup: FormGroup;
  readonly adDescriptionOptions = new AD_DESCRIPTION_OPTIONS();

  constructor() { }

  ngOnInit() {}
}
