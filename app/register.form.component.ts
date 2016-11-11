import { Component } from "@angular/core";

@Component({
  selector: 'ns-register',
  templateUrl: './app/templates/register-form.component.html'
})

export class RegisterFormComponent{
  register(){
    console.log('registered');
  }
}
