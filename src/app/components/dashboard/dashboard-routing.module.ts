import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // children: [
    //   {
    //     path: 'timezone',
    //     loadChildren: () => import('@components/timezone/timezone.module').then(m => m.TimezoneModule)
    //   },
    //   {
    //     path: 'stopwatch',
    //     loadChildren: () => import('@components/stopwatch/stopwatch.module').then(m => m.StopwatchModule)
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
