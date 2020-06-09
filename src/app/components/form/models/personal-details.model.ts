import { FormControl, Validators } from "@angular/forms";
import CustomValidation from "./custom-validation.interface";

export default class PersonalDetails implements CustomValidation {
  name = new FormControl("", [Validators.required]);
  age = new FormControl("", [Validators.required]);
  gender = new FormControl("");

  constructor() {}

  public _setValidations(resp) {
    console.log("Setting validation for Employment Details");
    //this.name.setErrors({custom: })
    this.setErrorMessage(this.name, resp, "name");
    this.setErrorMessage(this.age, resp, "age");
    this.setErrorMessage(this.gender, resp, "gender");
  }

  setErrorMessage = (control, resp, key) => {
    console.log(control, resp, key);

    if (resp[key]) {
      control.setErrors({ custom: resp[key] });
    }
  };
}
