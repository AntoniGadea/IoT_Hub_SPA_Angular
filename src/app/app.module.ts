import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PanelItemComponent } from './panels/panel-item/panel-item.component';
import { PanelListComponent } from './panels/panel-list/panel-list.component';
import { HomeComponent } from './components/home/home.component';
import { PanelsService } from './panels/panels.service';
import { HttpClientModule } from '@angular/common/http';
import { LightItemComponent } from './lights/light-item/light-item.component';
import { LightListComponent } from './lights/light-list/light-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PanelDetailComponent } from './panels/panel-detail/panel-detail.component';
import { ToKwPipe } from './panels/to-kw.pipe'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPanelPipe } from './panels/search-panel.pipe';
import { LoginComponent } from './components/login/login.component';
import { MoreInfoDirective } from './directives/more-info.directive';
import { ForDelayDirective } from './directives/for-delay.directive';
import { SearchLightPipe } from './lights/search-light.pipe';
import { LightDetailComponent } from './lights/light-detail/light-detail.component';
import { SpeackerListComponent } from './speaker/speacker-list/speacker-list.component';
import { SpeackerItemComponent } from './speaker/speacker-item/speacker-item.component';
import { PanelAddComponent } from './panels/panel-add/panel-add.component';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';
import { AddLightComponent } from './lights/add-light/add-light.component';
import { AddSpeakerComponent } from './speaker/add-speaker/add-speaker.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GraficaDirective } from './panels/grafica.directive';
import { GraphsComponent } from './components/graphs/graphs.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PanelItemComponent,
    PanelListComponent,
    HomeComponent,
    LightItemComponent,
    LightListComponent,
    NotFoundComponent,
    PanelDetailComponent,
    ToKwPipe,
    SearchPanelPipe,
    LoginComponent,
    MoreInfoDirective,
    ForDelayDirective,
    SearchLightPipe,
    LightDetailComponent,
    SpeackerListComponent,
    SpeackerItemComponent,
    PanelAddComponent,
    ErrorDisplayComponent,
    AddLightComponent,
    AddSpeakerComponent,
    GraficaDirective,
    GraphsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [PanelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
