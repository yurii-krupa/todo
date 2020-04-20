import { Component, OnDestroy, OnInit} from '@angular/core';
import { TodoDataService } from '../shared/services/todo-services/todo-data.service';
import { Subscription} from 'rxjs';
import { Todo } from '../shared/models/todo.model';
import { MatDialog, MatSnackBar } from '@angular/material';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit, OnDestroy {

  constructor(
    private todoDataService: TodoDataService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  private subscriptions: Subscription = new Subscription();

  todoList: Todo[] = [];

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.todoDataService.fetchAll()
        .subscribe(todoList  => {
          this.todoList = todoList.sort((a, b) => a.editedAt < b.editedAt ? 1 : -1);
        })
    );
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

    this.subscriptions.add(
      dialogRef.afterClosed()
        .subscribe(res => {
          if (res) {
            this.todoDataService.addItem(res as Todo)
            .then(_ => {
              this.openSnackBarMsg(`Item archived`);
            })
            .catch(err => {
              this.openSnackBarMsg(`Error while creating - ${err}`);
            });
          }
        })
    );
  }

  openSnackBarMsg(message): void {
    this.snackBar.open(message, '', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }

}
