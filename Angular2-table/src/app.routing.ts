import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './modules/components/home/app.component';
import { AboutComponent } from './modules/components/about/about.component';

const appRoutes: Routes = [
    {
        path: '',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);