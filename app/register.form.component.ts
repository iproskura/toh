import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators, Form } from '@angular/forms';

class User {
  username: string;
  password: string;
}

@Component({
  selector: 'ns-register',
  templateUrl: './app/templates/register-form.component.html'
})
export class RegisterFormComponent {
  userForm: FormGroup;
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  birthdateCtrl: FormControl;

  static isOldEnough(control: FormControl){
    const birthDatePlus18 = new Date(control.value);
    birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
    return birthDatePlus18 < new Date() ? null : {tooYoung: true};
  }

  constructor(fb: FormBuilder) {
    this.usernameCtrl = fb.control('', Validators.compose([Validators.required, Validators.minLength(3)]));
    this.passwordCtrl = fb.control('', Validators.required);
    this.birthdateCtrl = fb.control('', Validators.compose([Validators.required, RegisterFormComponent.isOldEnough]));

    this.userForm = fb.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl,
      birthdate: this.birthdateCtrl
    });
  }

  reset() {
    this.usernameCtrl.setValue('');
    this.passwordCtrl.setValue('');
  }

  register() {
    console.log(this.userForm.value);
  }
}


/*
const isOldEnough = (control: FormControl) => {
  const birthDatePlus18 = new Date(control.value);
  birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
  return birthDatePlus18 < new Date() ? null : {tooYoung: true};
};*/

/*this.usernameCtrl = fb.control('', Validators.compose([Validators.required, Validators.minLength(3)]));*/

