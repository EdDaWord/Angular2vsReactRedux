import { Component } from '@angular/core';
import './table.component.scss';


import { PeopleService } from '../../services/people.service';

//Metadata
@Component({
  selector: 'table-app',
  providers: [
    PeopleService // Dependency Injector
  ],
  templateUrl: './table.component.html'
})

export class TableComponent {

  // Data binding
  person_name: string = '';
  person_email: string = '';
  person_phone: string = '';
  people: Array<Object> = [];

  constructor(public peopleService: PeopleService) {

  }

  ngOnInit() {
    this.peopleService.fetchPeople()
      .subscribe(people => this.people = people);
  }

  submitPerson() {
    this.people.push({
      name: this.person_name,
      email: this.person_email,
      phone: this.person_phone
    });
  }
}

