import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];
