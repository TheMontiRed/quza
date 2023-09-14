import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperRoutingModule } from './wrapper-routing.module';
import { WrapperComponent } from './wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskModule } from './task/task.module';

@NgModule({
  imports: [
    CommonModule,
    WrapperRoutingModule,
    TaskModule
  ],
  declarations: [WrapperComponent, DashboardComponent],
  bootstrap: [WrapperComponent]
})
export class WrapperModule { }
