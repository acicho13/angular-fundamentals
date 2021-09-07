import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'upvote',
    styleUrls: ['upvote.component.scss'],
    template: `
      <div class="votingWidgetContainer" pointable (click)="onclick()">
        <div class="well votingWidget">
          <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
        </div>
        <div class="badge badge-inverse votingCount">
          <div>{{ count }}</div>
        </div>
      </div>
    `
})

export class UpvoteComponent {
    iconColor: string;
    @Input() count: number;
    @Input() set voted(val) {
      this.iconColor = val ? 'red' : 'white';
    }
    @Output() vote: EventEmitter<any> =new EventEmitter();

    
    onclick() {
      this.vote.emit({});
    }

}