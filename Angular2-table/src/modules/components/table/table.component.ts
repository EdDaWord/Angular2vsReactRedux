import { Component } from '@angular/core';
import './table.component.scss';

@Component({
  selector: 'table-app',
  templateUrl: './table.component.html'
})

export class TableComponent {

  // Set our default values
  localState = {
    people: [
      {
        id: 1,
        name: 'ed1 wang1',
        phone: '911',
        email: 'userONE@ed.com'
      },
      {
        id: 2,
        name: 'ed2 wang2',
        phone: '301',
        email: 'userTWO@ed.com'
      },
      {
        id: 3,
        name: 'ed2 wang2',
        phone: '101',
        email: 'userTHREE@ed.com'
      }
    ]
  };

  ngOnInit() {
    console.log('hello `Table` component');
  }
}

