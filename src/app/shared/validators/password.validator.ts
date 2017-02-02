

import {Directive, forwardRef, Attribute} from "@angular/core";
import {NG_VALIDATORS, Validator, AbstractControl} from "@angular/forms";
@Directive({
  selector: 'input[password]',
  providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => PasswordValidator), multi:true}]
})
export class PasswordValidator implements Validator {

  constructor(@Attribute('pwd') private pwd: string){

  }

  validate(c:AbstractControl): any {

    let allowedPasswords = this.pwd

    if (allowedPasswords.indexOf(c.value) > -1){
      return {};
    }

    return {
      pwd: "Password nicht erlaubt!"
    };
  }

}
