import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal( 13,'ABC Company','http://google.com', 'Ruby on Rails', 150,120, 14,'xyz@gmail.com')

proposalTwo: Proposal = new Proposal( 14,'XYZ Company','http://google.com', 'Ruby on Rails', 150,120, 14,'xyz@gmail.com')

proposalThree: Proposal = new Proposal( 15,'wxe Company','http://google.com', 'Ruby on Rails', 150,120, 14,'xyz@gmail.com')

}