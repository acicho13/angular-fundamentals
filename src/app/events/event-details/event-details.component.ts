import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute, Params } from "@angular/router";
import { IEvent, ISession } from "../shared/index";

@Component({
  templateUrl: "./event-details.component.html",
  styles:[`
    a { cursor: pointer;}
    .float-right {
      float: right;
    }
  `]
})
export class EventDetailsComponent {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session:ISession){
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession(){
    this.addMode = false;
  }

  ngOnInit() {
    this.route.data.forEach((data) => {
      console.log(data);
        this.event = data["event"];
        console.log(this.event);
        this.addMode = false;
      });
    
  }
}
