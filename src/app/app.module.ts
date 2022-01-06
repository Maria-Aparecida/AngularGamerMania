import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ConsoleComponent } from './views/console/console.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { PcComponent } from './views/pc/pc.component';
import { EntrarComponent } from './views/entrar/entrar.component';
import { OutletComponent } from './views/outlet/outlet.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsoleComponent,
    JogosComponent,
    PcComponent,
    EntrarComponent,
    OutletComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
