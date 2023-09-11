import { Component, OnDestroy } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy{

  user : string = '';
  sub: Subscription | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // this.firebaseService.addMessageFunc();
    this.sub = this.authService.loggedinUser.subscribe(user => {
      this.user = user;
    })
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
