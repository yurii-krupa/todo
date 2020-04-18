import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatSnackBarModule
} from '@angular/material';

import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSnackBarModule,
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
