import { FormControl } from "@angular/forms";
import CustomValidation from "./custom-validation.interface";

export default class EmploymentDetails implements CustomValidation {
  name = new FormControl("");
  position = new FormControl("");
  dateJoined = new FormControl("");

  constructor() {}

  public _setValidations(resp) {
    console.log("Setting validation for Employment Details");

    this.setErrorMessage(this.name, resp, "name");
    this.setErrorMessage(this.position, resp, "position");
    this.setErrorMessage(this.dateJoined, resp, "doj");
  }

  setErrorMessage = (control, resp, key) => {
    if (resp[key]) {
      control.setErrors({ custom: resp[key] });
    }
  };
}
