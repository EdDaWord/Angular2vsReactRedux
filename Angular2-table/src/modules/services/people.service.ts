import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PeopleService {
  // URL to web API
  private peopleUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(public http: Http) {}
  fetchPeople () {
    return this.http.get(this.peopleUrl).map((res: any) => res.json());
  }

}