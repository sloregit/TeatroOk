import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TeatroDBService } from '../teatro-db.service';
import { Observable, of, map, Subscription } from 'rxjs';
import { Teatro } from '../app.component';

export class Prenotazione {
  zona: string;
  nome: string;
  fila: number;
  posto: number;
  constructor(zona: string, nome: string, fila: number, posto: number) {
    this.zona = zona;
    this.nome = nome;
    this.fila = fila;
    this.posto = posto;
  }
}

export class Selezione {
  selezionati: Array<Prenotazione>;
  constructor() {
    this.selezionati = [];
  }
  aggiungi(prenotazione: Prenotazione) {
    this.selezionati.push(prenotazione);
  }
  rimuovi(fila: number, posto: number) {
    this.selezionati.map((old, i) => {
      if (old.fila === fila && old.posto === posto) {
        this.selezionati.splice(i, 1);
      }
    });
  }
}
@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css'],
})
export class TeatroComponent implements OnInit {
  @Input() rapido: boolean;
  @Input() teatro: Observable<Teatro>;
  @Output() spettacoloChange = new EventEmitter<Observable<Teatro>>();
  @Input() nomeUtente: string;
  nomeSpettacolo: string;
  nomePosto: string;
  platea: Array<Array<string>>;
  palco: Array<Array<string>>;
  prenotato: boolean;
  newPrenotazione: Prenotazione;
  prenotaGruppo: Selezione;
  selezionato: boolean;
  sub: Subscription;
  constructor() {}
  confermaPrenotazioni() {}
  mostraNome(nome) {
    console.log(nome.target);
  }
  ngOnInit() {
    this.sub = this.teatro.subscribe((teatro: Teatro) => {
      this.platea = teatro.platea;
      this.palco = teatro.palco;
    });
    console.log(this.platea);
  }
}
