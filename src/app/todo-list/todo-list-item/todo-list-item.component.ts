import { Component, Input, OnInit } from '@angular/core';
import { Todo, TodoStatusEnum } from '../../shared/models/todo.model';
import { TodoDataService } from '../../shared/services/todo-services/todo-data.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.less']
})
export class TodoListItemComponent implements OnInit {

  @Input() todoItem: Todo;

  constructor(
    private dataService: TodoDataService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() { }

  saveItem() {
    this.dataService.updateItem(this.todoItem)
      .then(_ => {
        this.openSnackBarMsg('Item has been updated');
      })
      .catch(err => {
        console.log(err);
        this.openSnackBarMsg(`Error while saving - ${err}`);
      });
  }

  archiveItem() {
    this.todoItem.status = TodoStatusEnum[TodoStatusEnum.archived];
    this.dataService.updateItem(this.todoItem)
      .then(_ => {
        this.openSnackBarMsg('Item archived');
      })
      .catch(err => {
        console.log(err);
        this.openSnackBarMsg(`Error while archiving - ${err}`);
      });
  }

  deleteItem() {
    this.dataService.deleteItem(this.todoItem.id)
      .then(_ => {
        this.openSnackBarMsg('Item deleted');
      })
      .catch(err => {
        console.log(err);
        this.openSnackBarMsg(`Error while deleting - ${err}`);
      });
  }

  openSnackBarMsg(message): void {
    this.snackBar.open(message, '', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }

}
