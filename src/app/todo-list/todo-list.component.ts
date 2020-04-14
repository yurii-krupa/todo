import { Component, OnDestroy, OnInit} from '@angular/core';
import { TodoDataService } from '../shared/services/todo-services/todo-data.service';
import { Subscription} from 'rxjs';
import { Todo } from '../shared/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit, OnDestroy {

  constructor(
    private todoDataService: TodoDataService
  ) { }

  private subscriptions: Subscription = new Subscription();

  todos: Todo[];

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit() {
    this.subscriptions.add(this.todoDataService.fetchAll().subscribe(todos  => {
      this.todos = todos;
    }));
  }

}
