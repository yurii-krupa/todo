import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListComponent } from './todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';

import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    NewTodoItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [
    TodoListComponent,
    TodoListItemComponent,
  ],
  entryComponents: [NewTodoItemComponent]
})
export class TodoListModule { }
