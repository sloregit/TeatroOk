import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TeatroDBService } from './teatro-db.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, LoginComponent],
  bootstrap: [AppComponent],
  providers: [TeatroDBService],
})
export class AppModule {}
