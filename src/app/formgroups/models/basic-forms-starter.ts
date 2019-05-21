import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export const BasicConstants = {
  adTitle: {
    required: true,
    minLength: 5,
    maxLength: 25
  },
  adDescription: {
    require: true,
    minLength: 10,
    rows: '5'
  }
};

export const ForSaleConstants = {
  BasicConstants,
  forSaleBy: [
    {who: 'dealer', value: 'dealer'},
    {who: 'owner', value: 'owner'}
  ],
  sellingFor: [
    {for: 'free', cost: 0, value: 'free'},
    {for: 'price', cost: 0, value: 'price'},
    {for: 'rent', cost: 0, value: 'rent'}
  ],
  sellingForPrice: 0
};

export const fb: FormBuilder = new FormBuilder();
export const titleDescriptionGroup: FormGroup = fb.group({
  adTitle: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(BasicConstants.adTitle.minLength)]],
  adDescription: ['', [Validators.required, Validators.minLength(BasicConstants.adDescription.minLength)]]
});
// tslint:disable-next-line:variable-name
export const forSaleSubGroup: FormGroup = fb.group({
  byWho: [''],
  sellingFor: [''],
  sellingForPrice: ['']
});
export const forSaleGroup: FormGroup = fb.group({
  titleDescriptionGroup,
  forSaleSubGroup
});
