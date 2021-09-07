import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared/index";

@Component({
  templateUrl: "create-event.component.html",
  styles: [
    `
      em {
        float: right;
        color: red;
        padding-left: 10px;
      }
      .error input {
        background-color: #f1bebe;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error: -moz-placeholder {
        color: #999;
      }
      .error:ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class CreateEventComponent implements OnInit {
  newEvent: any;
  // event: any;
  constructor(private router: Router, private eventService: EventService) {}

  isDirty: boolean = true;
  cancel() {
    this.router.navigate(["/events"]);
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(["/events"]);
    });

  }
  ngOnInit() {
    // this.event = {
    //   name: 'Ng Spectacular',
    //   date: '8/8/2028',
    //   time: '10am',
    //   price: 799.99,
    //   location: {
    //     address: '456 Happy St',
    //     city: 'Felicity',
    //     country: 'Angulatistan'
    //   },
    //   onlineUrl: 'http://ngSpectacular.com',
    //   imageUrl: 'https://ngSpectacular.com/logo.png'
    // }
  }
}
