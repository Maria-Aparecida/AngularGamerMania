import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './views/console/console.component';
import { EntrarComponent } from './views/entrar/entrar.component';
import { HomeComponent } from './views/home/home.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { OutletComponent } from './views/outlet/outlet.component';
import { PcComponent } from './views/pc/pc.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  {path: "console", component: ConsoleComponent},
  {path: "entrar", component: EntrarComponent},
  {path: "jogos", component: JogosComponent},
  {path: "outlet", component: OutletComponent},
  {path: "pc", component: PcComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
