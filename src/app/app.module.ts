import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainlayoutComponent } from './Components/Mainlayout/mainlayout/mainlayout.component';
import { FooterComponent } from './Components/Footer/footer/footer.component';
import { NavbarComponent } from './Components/Navbar/navbar/navbar.component';
import { Erro404Component } from './Components/404/erro404/erro404.component';
import { TestComponent } from './Components/test/test.component';
import { LoginComponent } from './Components/login/login.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    FooterComponent,
    NavbarComponent,
    Erro404Component,
    TestComponent,
    LoginComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
