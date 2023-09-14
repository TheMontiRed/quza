import { ErrorHandler, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';
import { environment } from '../environments/environment'
import { ReactiveFormsModule } from '@angular/forms';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import { HomeComponent } from './pages/home/home.component';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';
import { PwaService } from './utils/pwa.service';
import { GlobalErrorHandler } from './utils/global-error-handler';
import { AuthComponent } from './services/auth/auth.component';
import { LoginComponent } from './pages/users/login/login.component';
import { LogoutComponent } from './pages/users/logout/logout.component';
import { SignupComponent } from './pages/users/signup/signup.component';
import { ResetPasswordComponent } from './pages/users/reset-password/reset-password.component';
import { ProfileComponent } from './pages/users/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    ResetPasswordComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFunctions(() => getFunctions()),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    // provideAuth(() => {
    //   const auth = getAuth();
    //   connectAuthEmulator(auth, 'http://localhost:4200', { disableWarnings: true });
    //   return auth;
    // }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    {provide: SwUpdate, useClass: PwaService},
    {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
