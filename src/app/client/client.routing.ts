import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  { 
    path: '', 
    component: ClientComponent, 
    children:[
      { path: '**', redirectTo: 'template' }, // '**' represents any unmatched route
      { path: '', component: DashbordComponent },
      { path: 'template', component: TemplateComponent }
      // Wildcard route to redirect to 'template'
    ] 
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
