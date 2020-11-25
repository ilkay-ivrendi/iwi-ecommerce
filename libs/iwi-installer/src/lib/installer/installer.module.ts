import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { InstallerRoutingModule } from './installer-routing.module';
import { InstallerComponent } from './installer.component';

const routes: Routes = [
  { path: '', component: InstallerComponent }
];

@NgModule({
  declarations: [InstallerComponent],
  imports: [
    CommonModule,
    InstallerRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class InstallerModule { }
