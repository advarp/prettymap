import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app.routing.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './elements/header/header.component';
import {MainComponent} from './components/main/main.component';
import {MapComponent} from './components/map/map.component';
import {LoginComponent} from './components/auth/login/login.component';
import {AboutComponent} from './components/about/about.component';
import {MapService} from './components/map/map.service';
import {LoaderComponent} from './elements/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MapComponent,
    LoginComponent,
    AboutComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})

export class AppModule { }
