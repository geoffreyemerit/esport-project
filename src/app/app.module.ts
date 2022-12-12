import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { TeamsViewComponent } from './views/teams-view/teams-view.component';
import { TeamsListViewComponent } from './views/teams-list-view/teams-list-view.component';
import { TeamCardViewComponent } from './views/team-card-view/team-card-view.component';
import { TeamViewComponent } from './views/team-view/team-view.component';
import { PersonCardViewComponent } from './views/person-card-view/person-card-view.component';
import { PersonsListViewComponent } from './views/persons-list-view/persons-list-view.component';
import { PersonViewComponent } from './views/person-view/person-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsViewComponent,
    TeamsListViewComponent,
    TeamCardViewComponent,
    TeamViewComponent,
    PersonCardViewComponent,
    PersonsListViewComponent,
    PersonViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
