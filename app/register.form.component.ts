import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

class User {
  username: string;
  password: string;
}

@Component({
  selector: 'ns-register',
  templateUrl: './app/templates/register-form.component.html'
})
export class RegisterFormComponent {
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.usernameCtrl = fb.control('', Validators.compose([Validators.required, Validators.minLength(3)]));
    this.passwordCtrl = fb.control('', Validators.required);

    this.userForm = fb.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl
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
