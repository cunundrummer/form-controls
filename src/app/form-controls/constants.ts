const RADIX = 10; // in case of using parseInt method

export const ForSaleConstants = {
  // BasicConstants,
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

export const AD_TITLE_OPTIONS = function() {
  /**
   * @description helper method for retrieving other property (values)
   * @param propName: string The property to retrieve the value from
   */
  this.getPropertyValue = ((propName: string) => {
    // console.log(this);
    return this.validations[propName];
  });
  this.validations = {
    required: true,
    minlength: 5,
    maxlength: 25
  };
  this.errors = [
    {
      errorKey: 'required',
      message: 'A title is required.'
    },
    {
      errorKey: 'minlength',
      message:
        `You need at least ${this.getPropertyValue('minlength')} and upto ${this.getPropertyValue('maxlength')} characters for a title.`
    }
  ];
  this.hints = {
    hintLabel: `Enter a descriptive title of at most ${this.getPropertyValue('maxlength')} characters.`
  };
};

export const AD_DESCRIPTION_OPTIONS = function() {
  this.validations = {
    required: true,
  };
  this.errors = [
    {
      errorKey: 'required',
      message: 'A description is required.'
    }
  ];
  this.attributes = [
    {rows: 5},
    {cols: 30}
  ];
  this.hints = {
    hintLabel: 'Enter a descriptive description for a better chance to get a response.'
  };
};

export const AD_FOR_SALE_BY_OPTIONS = function() {
  this.validations = {
    required: true
  };
};


export interface ICondtionTypes {
  type: string;
  description: string;
}
export interface IConditions {
  category: {
    id?: string;
    name: string;
    conditionType: ICondtionTypes[]
  };
}

export const ForSaleConditionConstants: IConditions[] = [
  {
    category: {
      name: 'clothing/wearables',
      conditionType: [
        {
          type: 'New with tags',
          description: 'A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original' +
            ' box or bag) and/or with the original tags attached.'
        },
        {
          type: 'New without tags',
          description: 'A brand-new, unused, and unworn item (including handmade items) that is not in original packaging or may be ' +
            'missing original packaging materials (such as the original box or bag). The original tags may not be attached.'
        },
        {
          type: 'New with defects',
          description: ''
        },
        {
          type: 'Used',
          description: `An item that has been used or worn previously. See the seller's listing for full details and description of any
                        imperfections`
        }
      ]
    }
  }
];


export const AD_FOR_SALE_CONDITION_OPTIONS = function() {
  this.validation = {
    required: true,
  };
};
