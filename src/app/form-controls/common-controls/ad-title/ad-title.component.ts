import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AD_TITLE_OPTIONS } from '../../constants';

@Component({
  selector: 'app-ad-title',
  templateUrl: './ad-title.component.html',
  styleUrls: ['./ad-title.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdTitleComponent implements OnInit {
  @Input() attachedToFormGroup: FormGroup;
  readonly adTitleOptions = new AD_TITLE_OPTIONS();

  constructor() { }

  ngOnInit() {}
}
