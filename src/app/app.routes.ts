import { Routes } from '@angular/router';
import { InstalledModuleComponent } from './installed-module/installed-module.component';

export const routes: Routes = [
    { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
    { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
    {path:'installed-module',component:InstalledModuleComponent},
    {
        path: '**', redirectTo: 'client'
    }
];
