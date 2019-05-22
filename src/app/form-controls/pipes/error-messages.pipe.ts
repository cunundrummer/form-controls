import { Pipe, PipeTransform } from '@angular/core';
import { AD_TITLE_OPTIONS } from '../constants';

@Pipe({
  name: 'errorMessages',
  pure: true
})
export class ErrorMessagesPipe implements PipeTransform {
  errorsObject = {
    adTitleErrors: new AD_TITLE_OPTIONS().errors
  };

  transform(value: any, args?: any): any {
    console.log({value});
    return this.getErrorMessage(value);
  }

  getErrorMessage(keyObj: any): string {
    console.log('Getting error message for key:',  keyObj);
    const keyString = Object.keys(keyObj)[0];
    console.log('extracted key: ', keyString);
    for (const err of this.errorsObject.adTitleErrors) {
      // console.log(err);
      if (err.errorKey === keyString) {
        return err.message;
      }
    }
    return null;
  }
}
