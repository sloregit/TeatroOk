import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TeatroDBService } from './teatro-db.service';

export class Teatro {
  platea: Array<Array<string>>;
  palco: Array<Array<string>>;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() chiaveUtente: string;
  datiIn;
  sub;
  constructor(private TeatroDBService: TeatroDBService) {}
  accesso(chiave) {
    console.log(chiave);
  }
  //recupera i dati dal server
  getDati(chiave) {
    this.chiaveUtente = chiave;
    this.sub = this.TeatroDBService.getPrenotazioni$(
      this.chiaveUtente
    ).subscribe({
      next: (res: string) => {
        console.log(JSON.parse(res));
      },
      error: (e) =>
        console.error('Observer got an error: ' + JSON.stringify(e)),
    });
  }
}
/**{platea: Array[7], palco: Array[4]} */
