import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TeatroDBService } from './teatro-db.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() chiaveUtente: string;
  constructor() {}
  accesso(chiave){
    console.log(chiave)
  }
}
