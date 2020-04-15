import { Component, OnDestroy, OnInit} from '@angular/core';
import { TodoDataService } from '../shared/services/todo-services/todo-data.service';
import { Subscription} from 'rxjs';
import { Todo } from '../shared/models/todo.model';
import { MatDialog } from '@angular/material';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit, OnDestroy {

  constructor(
    private todoDataService: TodoDataService,
    private dialog: MatDialog
  ) { }

  private subscriptions: Subscription = new Subscription();

  todoList: Todo[] = [];

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit() {
    this.subscriptions.add(this.todoDataService.fetchAll().subscribe(todos  => {
      this.todoList = todos.sort((a,b) => a.editedAt < b.editedAt ? 1 : -1);
    }));
  }

  openNewTodoModal(e: Event) {
    e.stopPropagation();
    const dialogRef = this.dialog.open(NewTodoItemComponent, {
      width: '400px',
      data: new Todo({
        name: null,
        description: null
      })
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.todoDataService.addItem(res as Todo);
      }
    });
  }

}
