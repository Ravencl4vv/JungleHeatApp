import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtComponent } from './views/art/art.component';
import { FamilyComponent } from './views/family/family.component';
import { HomeComponent } from './views/home/home.component';
import { HouseComponent } from './views/house/house.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"art", component:ArtComponent},
  {path:"house",component:HouseComponent},
  {path:"family",component:FamilyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
