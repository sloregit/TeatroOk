import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TeatroDBService } from '../teatro-db.service';
import { Observable, of, map, Subscription } from 'rxjs';
import { Teatro } from '../app.component';

export class Selezione {
  zona: string;
  //nome: string;
  fila: number;
  posto: number;
  constructor(zona: string, fila: number, posto: number) {
    this.zona = zona;
    //this.nome = nome;
    this.fila = fila;
    this.posto = posto;
  }
}

export class SelezioneMultipla {
  selezionati: Array<Selezione>;
  constructor() {
    this.selezionati = [];
  }
  aggiungi(prenotazione: Selezione) {
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
  nomePosto: string;
  teatro: Teatro;
  prenotato: boolean;
  selezione: Selezione;
  selezionato: boolean;
  sub: Subscription;
  constructor() {
    this.sub = this.datiIn$.subscribe((teatro: Teatro) => {
      this.teatro = teatro;
    });
    console.log(this.teatro);
  }
  mostraNome(){
    
  }
  confermaPrenotazioni() {
    console.log(this.teatro);
    this.teatro[this.selezione.zona][this.selezione.fila][
      this.selezione.posto
    ] = this.nomeUtente;
  }
  seleziona(zona, fila, posto) {
    this.selezione = new Selezione(zona, fila, posto);
    console.log(this.selezione);
    this.selezionato = true;
  }
  prenotaRapido(zona, fila, posto) {
    if (!this.prenotato) {
      this.teatro[zona][fila][posto] = this.nomeUtente;
      this.prenotato = true;
    }
  }
  ngOnInit() {}
}
