import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FormService } from "./form.service";

@Component({
  selector: "app-root",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent {
  title = "Angular Reactive Form Validation";
  userRegistrationForm: FormGroup;
  constructor(private fb: FormBuilder, private formService: FormService) {
    this.createForm();
  }
  createForm() {
    this.formService.initForm();

    this.formService.form$.subscribe(formGroups => {
      this.userRegistrationForm = formGroups;
      console.log(this.userRegistrationForm);
    });
  }

  onSave = () => {
    let serverResponse = {
      personalDetails: {
        name: "Name should not be your name :(",
        age: "Age should be less than 40 :(",
        gender: "Gender error :("
      },
      contactDetails: {
        emailAddress: "Email Error :(",
        phone: "Phone Error :(",
        fax: "FAX Error :("
      },
      employment: {
        name: "Company Name Error :(",
        position: "Position Error :(",
        doj: "DOJ Error :("
      }
    };
    alert("Onsave called");
    this.formService._setValidations(serverResponse);
  };
}
