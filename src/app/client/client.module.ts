import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client.routing';
import { ClientComponent } from './client.component';
import { SharedModule } from '../shared/shared.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    ClientComponent,
    DashbordComponent,
    TemplateComponent
  ],
  imports: [
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
