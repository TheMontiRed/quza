import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperRoutingModule } from './wrapper-routing.module';
import { WrapperComponent } from './wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    WrapperRoutingModule
  ],
  exports: [WrapperComponent],
  declarations: [WrapperComponent]
})
export class WrapperModule { }
