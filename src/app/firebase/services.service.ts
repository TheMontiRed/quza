import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Functions, httpsCallable, connectFunctionsEmulator } from '@angular/fire/functions';
import { Firestore, connectFirestoreEmulator } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  functions: Functions = inject(Functions);
  firestore: Firestore = inject(Firestore);

  async addMessageFunc() {
    const addMessage = httpsCallable(this.functions, 'addmessage');
    { limitedUseAppCheckTokens: true }
    // connectFunctionsEmulator(this.functions, '127.0.0.1', 5002 );
    // connectFirestoreEmulator(this.firestore, '127.0.0.1', 8083);
    addMessage({first:"Ada", last:"Lovelace", born: 1815})
    .then((result) => {
        // Read result of the Cloud Function.
        console.log("Result: ", result);
      })
      .catch((error) => {
        // Getting the Error details.
        var code = error.code;
        var message = error.message;
        var details = error.details;
        console.log("Error: ", code, message, details);
      });
  }
}
