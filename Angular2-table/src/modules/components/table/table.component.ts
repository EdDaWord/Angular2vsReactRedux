import { Component } from '@angular/core';
import './table.component.scss';


import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'table-app',
  providers: [
    PeopleService
  ],
  templateUrl: './table.component.html'
})

export class TableComponent {

  errorMessage: string;
  people: Array<string> = [];

  constructor(public peopleService: PeopleService) {

  }

  ngOnInit() {
    this.peopleService.fetchPeople()
      .subscribe(
         people => this.people = people,
         error =>  this.errorMessage = <any>error);
  }
}

