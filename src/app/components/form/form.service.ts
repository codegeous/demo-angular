import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, FormArray } from "@angular/forms";
import { BehaviorSubject, Observable, from } from "rxjs";
import PersonalDetails from "./models/personal-details.model";
import ContactDetails from "./models/contact-details.model";
import EmploymentDetails from "./models/employement-details";

@Injectable({
  providedIn: "root"
})
export class FormService {
  public form$: Observable<any>;
  private form = new BehaviorSubject({});

  constructor(private fb: FormBuilder) {}

  formInstance: {
    pd: PersonalDetails;
    cd: ContactDetails;
    ed: EmploymentDetails;
  } = {
    pd: new PersonalDetails(),
    cd: new ContactDetails(),
    ed: new EmploymentDetails()
  };

  initForm() {
    this.form = new BehaviorSubject(
      this.fb.group({
        personalDetails: this.fb.group(this.formInstance.pd),
        contactDetails: this.fb.group(this.formInstance.cd),
        employmentDetails: this.fb.group(this.formInstance.ed)
      })
    );

    this.form$ = this.form.asObservable();
  }

  _setValidations = resp => {
    this.formInstance.ed._setValidations(resp.employment);
    this.formInstance.cd._setValidations(resp.contactDetails);
    this.formInstance.pd._setValidations(resp.personalDetails);
  };
}
