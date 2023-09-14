import { Component } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {

  displayName = "Esther Wango";

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if(this.authService.user){
      this.displayName = this.authService.user.displayName!;
    };
  }
}
