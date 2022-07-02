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
@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css'],
})
export class TeatroComponent implements OnInit {
  @Input() datiIn$: Observable<Teatro>;
  nomeUtente: string;
  rapido: boolean;
  nomePosto: string;
  teatro: Teatro;
  prenotato: boolean;
  selezione: Selezione;
  selezionato: boolean;
  sub: Subscription;
  constructor() {}
  confermaPrenotazioni() {
    console.log(this.teatro);
    this.teatro[this.selezione.zona][this.selezione.fila][
      this.selezione.posto
    ] = this.nomeUtente;
  }
  prenota(zona, fila, posto) {
    if (!this.rapido) {
      this.selezione = new Selezione(zona, fila, posto);
      this.selezionato = true;
    } else if (this.rapido) {
    }
  }
  seleziona(zona, fila, posto) {
    this.selezione = new Selezione(zona, fila, posto);
    this.selezionato = true;
  }
  prenotaRapido(zona, fila, posto) {
    console.log('prenotaRapido');
    if (!this.prenotato) {
      this.teatro[zona][fila][posto] = this.nomeUtente;
      this.prenotato = true;
    }
  }
  //mostra il nome del posto prenotato
  mostraNome($event: string) {
    console.log('mostraNome');
    this.nomePosto = $event;
  }
  getTeatro(rapido) {
    this.rapido = rapido;
    this.sub = this.datiIn$.subscribe((teatro: Teatro) => {
      this.teatro = teatro;
    });
  }
  ngOnInit() {}
}
