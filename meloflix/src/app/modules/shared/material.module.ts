import { NgModule } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

const materialModules = [
  MatToolbarModule,
  MatCardModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [...materialModules],
  exports: [...materialModules]
})
export class MaterialModule { }
