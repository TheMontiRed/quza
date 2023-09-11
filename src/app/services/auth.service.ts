import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile} from '@angular/fire/auth';
import { } from "firebase/auth";
import { UserData } from 'app/interface/user';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth = inject(Auth);
  user = this.auth.currentUser;
  userExists = false;
  errorMessage = new BehaviorSubject('');
  loggedinUser = new BehaviorSubject('');

  constructor(private router: Router) {

    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        this.loggedinUser.next(uid);
        // ...
      } else {
        // User is signed out
        this.loggedinUser.next('');
      }
    });
  }

  signup({ email, password }: UserData) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        this.router.navigate(['/profile']);
        // ...
      })
      .catch((error) => {
        this.errorMessage.next(error.code);
        console.log(error);
        // ..
      });
  }

  login({ email, password }: UserData) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
        this.router.navigate(['/wrapper']);
        // ...
      })
      .catch((error) => {
        this.errorMessage.next(error.code);
        console.log(error);
      });
  }

  updateProfile({displayName, photoURL}: UserData ){
    updateProfile(this.auth.currentUser!, {
      displayName: displayName,
      photoURL: photoURL
    }).then(() => {
      // Profile updated!
      console.log("User updated");
      this.router.navigate(['/wrapper']);
    }).catch((error) => {
      // An error occurred
      console.log(error);
    });
  }
}

