import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/index';
import { DurationPipe} from '../shared/duration.pipe'
import { AuthService } from '../../user/auth.service'
import { VoterService } from './voter.service';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    @Input() eventId: number;
    visibleSessions: ISession[];

    constructor(private auth: AuthService,
                private voterService: VoterService){

    }

    filterSessions(filter) {
        if (filter === 'all') {
            this.visibleSessions = [...this.sessions];
        } else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLowerCase() === filter;
            })
        }
    }

    sortByNameAsc(s1: ISession, s2: ISession) {
        if (s1.name > s2.name) {
            return 1
        }else if (s1.name === s2.name) {
            return 0
        }else{
            return -1
        }
    }

    sortByVotesDesc(s1: ISession, s2: ISession) {
        return s2.voters.length - s1.voters.length
    }

    toggleVote(session: ISession) {
        if (this.userHasVoted(session)){
            console.log('true');
            this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
        }else {
             console.log(this.auth.currentUser.userName);
            this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
        }
        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(this.sortByVotesDesc);
        }
    }

    userHasVoted(session: ISession) {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName)
    }
    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByNameAsc) : this.visibleSessions.sort(this.sortByVotesDesc);
        }
    }
}