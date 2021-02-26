import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddLightComponent } from './lights/add-light/add-light.component';
import { LightDetailComponent } from './lights/light-detail/light-detail.component';
import { LightListComponent } from './lights/light-list/light-list.component';
import { PanelAddComponent } from './panels/panel-add/panel-add.component';
import { PanelDetailComponent } from './panels/panel-detail/panel-detail.component';
import { PanelListComponent } from './panels/panel-list/panel-list.component';
import { AddSpeakerComponent } from './speaker/add-speaker/add-speaker.component';
import { SpeackerListComponent } from './speaker/speacker-list/speacker-list.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full' },
  {path: 'panels', component: PanelListComponent, canActivate: [AuthGuard]},
  {path: 'panel/:id', component: PanelDetailComponent, canActivate: [AuthGuard]},
  {path: 'panel-add', component: PanelAddComponent, canActivate: [AuthGuard]},
  {path: 'lights', component: LightListComponent, canActivate: [AuthGuard]},
  {path: 'light/:id', component: LightDetailComponent, canActivate: [AuthGuard]},
  {path: 'light-add', component: AddLightComponent, canActivate: [AuthGuard]},
  {path: 'speakers', component: SpeackerListComponent, canActivate: [AuthGuard]},
  {path: 'speaker-add', component: AddSpeakerComponent, canActivate: [AuthGuard]},
  {path: '**', pathMatch: 'full', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
