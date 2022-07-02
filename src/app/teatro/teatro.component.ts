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
  @Input() datiIn$: Observable<Teatro>;
  @Input() nomeUtente: string;
  teatro: Teatro;
  nomePosto: string;
  prenotato: boolean;
  newPrenotazione: Prenotazione;
  prenotaGruppo: Selezione;
  selezionato: boolean;
  sub: Subscription;
  constructor() {}
  confermaPrenotazioni() {
    console.log(this.selezionato);
  }
  seleziona(zona, fila, posto) {
    this.selezionato = this.teatro[zona][fila][posto];
    console.log(this.selezionato);
  }
  prenotaRapido(zona, fila, posto) {
    this.teatro[zona][fila][posto] = this.nomeUtente;
    this.prenotato = true;
  }
  ngOnInit() {
    this.sub = this.datiIn$.subscribe((teatro: Teatro) => {
      this.teatro = teatro;
    });
    console.log(this.teatro);
  }
}
