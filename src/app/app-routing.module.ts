import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { ServicosComponent } from './servicos/servicos.component';
import { SobreComponent } from './sobre/sobre.component';


const routes: Routes = 
[
  {
    path: '',
    // redirectTo:'home', 
    component: HomeComponent
  },
  {
    path:'sobre',
    component: SobreComponent
  },
  {
    path:'servicos',
    component: ServicosComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
