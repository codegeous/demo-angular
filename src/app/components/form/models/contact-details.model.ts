import { FormControl } from "@angular/forms";
import CustomValidation from "./custom-validation.interface";

export default class ContactDetails implements CustomValidation {
  email = new FormControl("");
  phone = new FormControl("");
  fax = new FormControl("");

  constructor() {}

  public _setValidations = resp => {
    this.setErrorMessage(this.email, resp, "emailAddress");
    this.setErrorMessage(this.phone, resp, "phone");
    this.setErrorMessage(this.fax, resp, "fax");
  };

  setErrorMessage = (control, resp, key) => {
    if (resp[key]) {
      control.setErrors({ custom: resp[key] });
    }
  };
}
