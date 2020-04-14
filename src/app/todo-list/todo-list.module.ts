import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

import {
  MatCardModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoListItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    TodoListComponent,
    TodoListItemComponent
  ]
})
export class TodoListModule { }
