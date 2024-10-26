import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss'],
})
export class SignInModalComponent {
  isRegisterMode = false;
  email: string = '';
  password: string = '';

  onSubmit() {
    if (this.email == 'test@test' && this.password == 'test')
      console.log('pass');
    else console.log('fail');
  }
  toggle(event: MouseEvent) {
    event.preventDefault();
    this.isRegisterMode = !this.isRegisterMode; // Toggle the mode
  }
}
