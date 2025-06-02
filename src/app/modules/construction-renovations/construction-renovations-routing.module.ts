import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { ConstructionRenovationsComponent } from './construction-renovations.component';

const routes: Routes = [
  {
    path: '', component: ConstructionRenovationsComponent,
    children: [
      { path: '', component: HomeComponent, },
      { path: 'home', component: HomeComponent, },
      { path: 'weddingphotography', component: ConstructionRenovationsComponent, },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:  [RouterModule],
})
export class ConstructionRenovationsRoutingModule {}
