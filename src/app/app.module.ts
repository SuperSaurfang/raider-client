import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartpageComponent } from './startpage/startpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { NoaccesComponent } from './noacces/noacces.component';

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    LoginComponent,
    RegisterComponent,
    ChatlistComponent,
    ChatroomComponent,
    NoaccesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
