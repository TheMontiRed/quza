import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.addMessageFunc();
  }
  title = 'quza';
}
