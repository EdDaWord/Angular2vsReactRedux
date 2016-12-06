import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './modules/components/home/app.component';
import { TableComponent } from './modules/components/table/table.component';

const appRoutes: Routes = [
    {
        path: '',
        component: TableComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);