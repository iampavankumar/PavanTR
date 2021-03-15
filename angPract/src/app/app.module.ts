import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BindingsComponent } from './bindings/bindings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { DecoratorsComponent } from './decorators/decorators.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BindingsComponent,
    HomeComponent,
    PagenotfoundComponent,
    DirectivesComponent,
    CustomDirectiveDirective,
    DecoratorsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"bindings",component:BindingsComponent},
      {path:"directives",component:DirectivesComponent},
      {path:"decorators",component:DecoratorsComponent},
      {path:"login",component:LoginComponent},
      {path:"signup",component:SignupComponent},
      {path:"**",component:PagenotfoundComponent}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
