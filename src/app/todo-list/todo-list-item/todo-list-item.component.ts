import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../shared/models/todo.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.less']
})
export class TodoListItemComponent implements OnInit {

  @Input() todoItem: Todo;

  constructor() { }

  ngOnInit() {
  }

}
