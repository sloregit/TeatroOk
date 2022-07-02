import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//Esempio di come si prendono i dati da TeatroDBService
@Injectable()
export class AppDBService {
  Key: string = '0ef3f513';
  URL: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/';
  constructor(private http: HttpClient) {}
  public getPrenotazioni$(): Observable<string> {
    return this.http.get<string>(this.URL + 'get?key=' + this.Key);
  }
  public SetPrenotazioni$(prenotazioni: string): Observable<string> {
    return this.http.post<string>(
      this.URL + 'set?key=' + this.Key,
      prenotazioni
    );
  }
}
/**
  
interface RichiestaDati {
  key: string;
  prenotazioni: Object;
  GetPrenotazioni$: Observable<AjaxResponse<string>>;
  SetPrenotazioni$: Observable<AjaxResponse<string>>;
}

class generaDati implements RichiestaDati {
  key: string;
  prenotazioni: Object;
  GetPrenotazioni$: Observable<AjaxResponse<string>> = ajax({
    url: URL + 'get?key=' + key,
    crossDomain: true,
    method: 'GET',
  });
  SetPrenotazioni$: Observable<AjaxResponse<string>> = ajax({
    url: URL + 'set?key=' + key,
    crossDomain: true,
    method: 'POST',
    body: prenotazioni,
  });
  constructor(key, prenotazioni?) {
    this.key = key;
    this.prenotazioni = prenotazioni;
  }
}
///Chiave: 0ef3f513
const Key: string = '0ef3f513';
const URL: string =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/';

 */
