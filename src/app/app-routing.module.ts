import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './application/login/login.component';
import { BarComponent } from './application/bar/bar.component';
import { AcceuilComponent } from './application/acceuil/acceuil.component';
import { MakeupComponent } from './application/makeup/makeup.component';
import { DressComponent } from './application/dress/dress.component';
import { AjoutComponent } from './application/ajout/ajout.component';
import { RechercheComponent } from './application/recherche/recherche.component';
import { SeeMoreComponent } from './see-more/see-more.component';
const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'bar', component:BarComponent },
  {path:'ajout', component:AjoutComponent},
    {path:'acceuil', component:AcceuilComponent},
    {path:'makeup', component:MakeupComponent},
    {path:'dress', component:DressComponent},
    {path:'dress/:ref', component:SeeMoreComponent},
    {path:'makeup/:ref', component:SeeMoreComponent},
    {path:'recherche', component:RechercheComponent},
    {path:'', redirectTo:'acceuil', pathMatch:'full'},
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
