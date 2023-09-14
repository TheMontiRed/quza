import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { UserData } from 'app/interface/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  user : string = '';

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
      // this.firebaseService.addMessageFunc();
      this.sub = this.authService.loggedinUser.subscribe(user => {
        this.user = user;
        if(user){
          this.router.navigate(['/wrapper']);
        }
      })

    }

  errorMessage : string = '';
  sub: Subscription | undefined;

  onSubmit() {
    const user: UserData = {
      email: this.loginForm.value.email != null ? this.loginForm.value.email : '',
      password: this.loginForm.value.password != null ? this.loginForm.value.password : ''
    };

    this.authService.login(user);

    this.sub = this.authService.errorMessage.subscribe(message => {
      this.errorMessage = message;
    })

    console.log(this.loginForm.controls.email);
    }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
