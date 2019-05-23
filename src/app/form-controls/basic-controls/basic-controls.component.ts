import { Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-controls',
  templateUrl: './basic-controls.component.html',
  styleUrls: ['./basic-controls.component.css']
})
export class BasicControlsComponent implements OnInit {
  @Input() basicFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log('received formGroup: ', this.basicFormGroup);
  }

}
