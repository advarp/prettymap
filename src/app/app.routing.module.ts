import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {MapComponent} from './components/map/map.component';
import {LoginComponent} from './components/auth/login/login.component';
import {AboutComponent} from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
