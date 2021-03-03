import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MaterialModule} from "./material.module";

const sharedModules = [
  CommonModule,
  FlexLayoutModule,
  MaterialModule
]

@NgModule({
  declarations: [],
  imports: [...sharedModules],
  exports: [...sharedModules]
})
export class SharedModule { }
