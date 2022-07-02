import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TeatroDBService } from './teatro-db.service';
import { LoginComponent } from './login/login.component';
import { GestioneComponent } from './gestione/gestione.component';
import { TeatroComponent } from './teatro/teatro.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    LoginComponent,
    TeatroComponent,
    GestioneComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TeatroDBService],
})
export class AppModule {}
