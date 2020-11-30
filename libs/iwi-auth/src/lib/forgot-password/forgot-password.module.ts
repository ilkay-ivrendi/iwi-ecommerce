import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { MaterialModule } from '@iwi/iwi-ui';

const routes: Routes = [
  { path: '', component: ForgotPasswordComponent }
];

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ForgotPasswordModule { }
