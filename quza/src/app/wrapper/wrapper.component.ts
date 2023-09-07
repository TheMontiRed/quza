import { Component } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {
  constructor() { }

  ngOnInit(): void {
    console.log("Hey");
  }
  title = 'quza';
}
