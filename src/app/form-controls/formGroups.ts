import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const fb: FormBuilder = new FormBuilder();
export const adTitleFormGroup: FormGroup = fb.group({
  adTitle: ['',
    [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(25)
    ]
  ]
});

export const adDescriptionGroup: FormGroup = fb.group({
  adDescription: ['']
});

// tslint:disable-next-line:variable-name
export const forSaleByGroup: FormGroup = fb.group({
  byWho: [''],
  sellingFor: [''],
  sellingForPrice: ['']
});

