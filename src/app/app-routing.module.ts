import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {CoworkcardComponent} from "./components/coworkcard/coworkcard.component";
import {RoomcardComponent} from "./components/roomcard/roomcard.component";
import {SpacelistComponent} from "./components/spacelist/spacelist.component";
import {RoomlistComponent} from "./components/roomlist/roomlist.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', component: HomeComponent},
  { path: 'space', component: CoworkcardComponent},
  { path: 'room', component: RoomcardComponent},
  { path: 'spacelist', component: SpacelistComponent},
  { path: 'roomlist', component: RoomlistComponent},
  { path: 'home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
