import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

export const iwiInstallerRoutes: Route[] = [
  {
    path: 'installer',
    loadChildren: () =>
      import('./installer/installer.module').then((m) => m.InstallerModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(iwiInstallerRoutes)],
})
export class IwiInstallerModule {}
