import { Component, Input, OnInit, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { IEvent } from "./shared/index";

@Component({
  selector: "app-event-thumbnail",
  templateUrl: "event-thumbnail.component.html",
  styleUrls: ["event-thumbnail.component.scss"],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;
  // event emitter sends only single values else use object
  @Output() eventClick = new EventEmitter();
  someProperty: any = "some value";

  constructor() {}

  // send event from child -> parent
  handleClickMe() {
    console.log('click')
    this.eventClick.emit(this.event.name);
  }

  // getStartTimeClass() {
  //   const isEarlyStart = this.event && this.event.time === "8:00 am";
  //   return { green: isEarlyStart, bold: isEarlyStart };
  // }
  getStartTimeClass() {
    if (this.event && this.event.time === "8:00 am") {
      return "green bold";
    }
    return "";
  }



  ngOnInit() {}
}
