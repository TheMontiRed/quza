import { Component } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {
  ngOnInit(): void {
    // this.firebaseService.addMessageFunc();
    console.log("wrapper");
  }
}
