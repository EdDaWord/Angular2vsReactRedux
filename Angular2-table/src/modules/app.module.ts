import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { routing } from '../app.routing';

import { AppComponent } from './components/home/app.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    TableComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

