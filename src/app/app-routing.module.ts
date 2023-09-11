import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/users/login/login.component';
import { SignupComponent } from './pages/users/signup/signup.component';
import { ProfileComponent } from './pages/users/profile/profile.component';

const routes: Routes = [
  {
    path: '',
   component: HomeComponent
  },
  {
    path: 'login',
   component: LoginComponent
  },
  {
    path: 'signup',
   component: SignupComponent,
  },
  {
    path: 'profile',
   component: ProfileComponent,
  },
  {
    path: 'wrapper',
    loadChildren: () => import('./wrapper/wrapper.module').then(m => m.WrapperModule),
  },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
