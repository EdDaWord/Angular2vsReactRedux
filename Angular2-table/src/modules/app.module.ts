import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { routing } from '../app.routing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/home/app.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    TableComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

