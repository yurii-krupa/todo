import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo-list',
    pathMatch: 'full'
  },
  {
    path: 'todo-list',
    component: TodoListComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'todo-list/:id',
    canActivate: [AuthGuard],
    component: TodoListItemComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '**',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
