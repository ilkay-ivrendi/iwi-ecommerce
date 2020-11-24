import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  { path: '', component: RegisterComponent }
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class RegisterModule { }
