import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { ForSaleConditionConstants, IConditionTypes } from '../../constants';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete-component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  @Input() attachedToFormGroup: FormGroup;
  filteredOptions: Observable<IConditionTypes[]>;
  options: {
    conditions: any[],
    defects: any[]
  } = {
    conditions: [],
    defects: []
  };
  get defectControl() {
    return this.attachedToFormGroup.controls.defect as FormControl;
  }
  constructor() { }

  ngOnInit() {
    // see todo
    this.options.defects = ForSaleConditionConstants[0].category.defectTypes;

    console.log(this.options.defects);
    this.filteredOptions = this.attachedToFormGroup.controls.defect.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): IConditionTypes[] {
    const filterValue = value.toLowerCase();
    console.log(filterValue);
    // todo: will have to update this to additionally filter for category.  But as a test, this works as it should
    return this.options.defects.filter((option: {type: string, description: string}) => {
      return option.type.toLowerCase().includes(filterValue);
    });
  }

}
