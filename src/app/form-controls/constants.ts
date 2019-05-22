export const AD_TITLE_OPTIONS = function() {
  /**
   * @description helper method for retrieving other property (values)
   * @param propName: string The property to retrieve the value from
   */
  this.getPropertyValue = ((propName: string) => {
    console.log(this);
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
