import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';
import { LazyModuleRouter } from './lazy-module.router';

@NgModule({
  declarations: [LazyComponentComponent],
  imports: [
  	CommonModule,
  	LazyModuleRouter
  ]
})
export class LazyModuleModule { }
