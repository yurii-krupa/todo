import { Component, Input, OnInit } from '@angular/core';
import { Todo, TodoStatusEnum } from '../../shared/models/todo.model';
import { TodoDataService } from '../../shared/services/todo-services/todo-data.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.less']
})
export class TodoListItemComponent implements OnInit {

  @Input() todoItem: Todo;

  constructor(
    private dataService: TodoDataService
  ) { }

  ngOnInit() {

  }

  saveItem() {
    this.dataService.updateItem(this.todoItem).then(res => console.log(res))
      .catch(err => console.log(err));
  }

  archiveItem() {
    this.todoItem.status = TodoStatusEnum[TodoStatusEnum.archived];
    this.dataService.updateItem(this.todoItem).then(res => console.log(res))
      .catch(err => console.log(err));
  }

  deleteItem() {
    this.dataService.deleteItem(this.todoItem.id).then(res => console.log(res))
      .catch(err => console.log(err));
  }

}
