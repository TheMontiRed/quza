import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpClientJsonpModule, HttpHeaders } from '@angular/common/http';

import { Observable, throwError, from } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Functions } from '@angular/fire/functions';
import { httpsCallable, connectFunctionsEmulator } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthService {

  functions: Functions = inject(Functions);

  constructor(private http: HttpClient) { }

  requestAuthCode(): Observable<any> {

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

      const xhr = new XMLHttpRequest();


    const authUrlEndpoint = environment.zoho_auth_base_url;
    const client_id = environment.zoho_client_id;
    const response_type = "code";
    const redirect_uri = environment.zoho_redirect_uri;
    const scope = environment.zoho_creator_scope_form_create;
    const url = authUrlEndpoint + "response_type=" + response_type + "&client_id=" + client_id + "&scope=" + scope + "&redirect_uri=" + redirect_uri;
    console.log(url)
    xhr.open("GET", url);
    xhr.send();
    return this.http.jsonp(url, 'callback');

    // const response = await fetch(url, {
    //   method: "GET", // *GET, POST, PUT, DELETE, etc.
    //   mode: "no-cors", // no-cors, *cors, same-origin
    // });
    // const movies = await response;
    // console.log(movies);
  }
}
