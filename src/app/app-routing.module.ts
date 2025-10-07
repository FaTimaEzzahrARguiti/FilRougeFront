import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {CoworkcardComponent} from "./components/coworkcard/coworkcard.component";
import {RoomcardComponent} from "./components/roomcard/roomcard.component";
import {SpacelistComponent} from "./components/spacelist/spacelist.component";
import {RoomlistComponent} from "./components/roomlist/roomlist.component";
import { EditspaceComponent } from './components/editspace/editspace.component';
import {AddroomComponent} from "./components/addroom/addroom.component";
import {EditroomComponent} from "./components/editroom/editroom.component";
import {AddspaceComponent} from "./components/addspace/addspace.component";
import { authGuard } from './guards/auth-guard';
import { roleGuard } from './guards/role-guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', component: HomeComponent},
  { path: 'space', component: CoworkcardComponent, canActivate: [authGuard]},
  { path: 'room', component: RoomcardComponent, canActivate: [authGuard]},
  { path: 'spacelist', component: SpacelistComponent, canActivate: [roleGuard], data: { role: 'ADMIN' }},
  { path: 'roomlist', component: RoomlistComponent, canActivate: [authGuard]},
  { path: 'home', component: HomeComponent},
  { path: 'editspace/:id', component: EditspaceComponent, canActivate: [roleGuard], data: { role: 'ADMIN' }},
  { path: 'addspace', component: AddspaceComponent, canActivate: [roleGuard], data: { role: 'ADMIN' }},
  { path: 'space/:spaceId/addroom', component: AddroomComponent, canActivate: [roleGuard], data: { role: 'ADMIN' }},
  { path: 'room/:id/edit', component: EditroomComponent, canActivate: [roleGuard], data: { role: 'ADMIN' }},
  { path: 'space/:id/rooms', component: RoomlistComponent, canActivate: [authGuard]},
  { path: 'space/:id/room', component: RoomcardComponent, canActivate: [authGuard] }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

