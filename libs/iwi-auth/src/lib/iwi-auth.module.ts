import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { IwiUiModule } from '@iwi/iwi-ui';

export const iwiAuthRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(iwiAuthRoutes), IwiUiModule],
})
export class IwiAuthModule {}
