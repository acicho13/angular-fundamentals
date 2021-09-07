import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HttpClientModule} from '@angular/common/http'
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  EventResolver,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  VoterService,
  LocationValidatorDirective,
  DurationPipe,
} from "./events/index";
import { JQ_TOKEN, 
         TOASTR_TOKEN, Toastr, 
         CollapsibleWellComponent,
         SimpleModalComponent,
         ModalTriggerDirective } from './common/index';

import { NavBarComponent } from "./nav/navbar.component";

import { Error404Component } from "./errors/404.component";
import { appRoutes } from "./routes";

import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  // component, pipe, or directive
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    LocationValidatorDirective,
    UpvoteComponent
  ],
  // other modules
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  // services
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr},
    { provide: JQ_TOKEN, useValue: jQuery},
    EventResolver,
    EventListResolver,
    AuthService,
    VoterService,
    {
      provide: "canDeactivateCreateEvent",
      useValue: checkDirtyState,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm(
      "You have not saved this event, do you really want to cancel?"
    );
  return true;
}
