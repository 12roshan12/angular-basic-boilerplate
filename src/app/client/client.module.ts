import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client.routing';
import { ClientComponent } from './client.component';

@NgModule({
  declarations: [
    ClientComponent,
  ],
  imports: [
    ClientRoutingModule
  ]
})
export class ClientModule { }
