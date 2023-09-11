import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperRoutingModule } from './wrapper-routing.module';
import { WrapperComponent } from './wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    WrapperRoutingModule
  ],
  declarations: [WrapperComponent, DashboardComponent],
  bootstrap: [WrapperComponent]
})
export class WrapperModule { }
