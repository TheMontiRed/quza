import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserData } from 'app/interface/user';
import { AuthService } from 'app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnDestroy {
  signupForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  errorMessage : string = '';
  sub: Subscription | undefined;

  constructor(private authService: AuthService) {}

  onSubmit() {
    const user: UserData = {
      email: this.signupForm.value.email != null ? this.signupForm.value.email : '',
      password: this.signupForm.value.password != null ? this.signupForm.value.password : ''
    };

    this.authService.signup(user);
    this.sub = this.authService.errorMessage.subscribe(message => {
      this.errorMessage = message;
    })
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
