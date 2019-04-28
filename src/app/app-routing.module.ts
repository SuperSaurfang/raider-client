import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartpageComponent } from './startpage/startpage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { NoaccesComponent } from './noacces/noacces.component';

import { RouteGuard } from './route.quard';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartpageComponent },
  { path: 'login', component: LoginComponent, canActivate: [RouteGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'chatlist', component: ChatlistComponent, canActivate: [RouteGuard] },
  { path: 'chatroom/:chatname', component: ChatroomComponent, canActivate: [RouteGuard] },
  { path: 'noacces', component: NoaccesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
