import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-pulsante',
  templateUrl: './pulsante.component.html',
  styleUrls: ['./pulsante.component.css'],
})
export class PulsanteComponent implements OnInit {
  @Output() cliccato = new EventEmitter();
  @Input() nomePosto: string;
  @Input() etichetta: string;
  @Input() prenotato: boolean;
  @Input() rapido: boolean;
  @Output() nomePostoEmitter = new EventEmitter<string>();
  selezionato: boolean;
  @Output() selezionatoEmitter = new EventEmitter<boolean>();
  constructor() {
    this.selezionato = false;
  }
  prenotaL() {
    if (this.nomePosto === null) {
      this.selezionato === true
        ? (this.selezionato = false)
        : (this.selezionato = true);
    }
    this.cliccato.emit();
    console.log(this.nomePosto);
    this.nomePostoEmitter.emit(this.nomePosto);
  }
  mostraNome() {}
  ngOnInit() {}
}
