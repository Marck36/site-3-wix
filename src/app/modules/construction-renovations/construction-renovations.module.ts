import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConstructionRenovationsRoutingModule } from './construction-renovations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ConstructionRenovationsComponent } from './construction-renovations.component';
import { HomeComponent } from './pages';


@NgModule({
    declarations: [
      ConstructionRenovationsComponent,
      HomeComponent,
    ],
    imports: [
      CommonModule,
      SharedModule,
      ConstructionRenovationsRoutingModule,
    ],
    exports: [
      ConstructionRenovationsComponent,
      HomeComponent,
    ],
  })
  export class ConstructionRenovationsModule { }
