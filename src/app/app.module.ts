import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './application/login/login.component';
import { BarComponent } from './application/bar/bar.component';
import { AcceuilComponent } from './application/acceuil/acceuil.component';
import { MakeupComponent } from './application/makeup/makeup.component';
import { DressComponent } from './application/dress/dress.component';
import { AjoutComponent } from './application/ajout/ajout.component';
import { RechercheComponent } from './application/recherche/recherche.component';
import { CushPipe } from './cush.pipe';
import { PromoPipe } from './promo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BarComponent,
    AcceuilComponent,
    MakeupComponent,
    DressComponent,
    AjoutComponent,
    RechercheComponent,
    CushPipe,
    PromoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
