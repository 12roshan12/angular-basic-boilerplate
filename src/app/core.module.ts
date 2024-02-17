import { NgModule } from '@angular/core';
import { InstalledModuleComponent } from './installed-module/installed-module.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InstalledModuleComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CoreModule { }
