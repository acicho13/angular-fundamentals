import { Component, OnInit, ViewChild } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared/index";
import { EventThumbnailComponent } from "./event-thumbnail.component";

@Component({
  selector: "app-events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.scss"],
})
export class EventsListComponent implements OnInit {
  // add child to use methods in parent
  events: IEvent[];
  constructor(
    //private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  handleEventClicked(data) {
    console.log("received:", data);
  }


  ngOnInit() {
    this.events = this.route.snapshot.data["events"];
    // this.eventService.getEvents().subscribe((events) => {
    //   this.events = events;
    // });
  }
}
