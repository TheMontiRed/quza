import { Component } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Router } from 'express';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {

  displayName = "";

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if(this.authService.user){
      this.displayName = this.authService.user.displayName!;
    };
  }
}
