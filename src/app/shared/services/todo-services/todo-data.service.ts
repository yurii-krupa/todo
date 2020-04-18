import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Todo } from '../../models/todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private readonly firestore: AngularFirestore
  ) { }

  private todoListPath = '/todos';

  fetchAll(): Observable<Todo[]> {

    return this.firestore.collection<Todo[]>(this.todoListPath)
      .snapshotChanges()
      .pipe(map(todos => {
        return todos.map(i => {
          return new Todo({
            id: i.payload.doc.id,
            ...i.payload.doc.data()
          });
        }) as any[];
      }));
  }

  fetchItem(id: string): Observable<Todo> {
    return this.firestore.doc(`${this.todoListPath}/${id}`)
      .get().pipe(
        map(item => {
          return {
            id: item.id,
            ...item.data()
          } as any;
        })
      );
  }

  addItem(item: Todo): Promise<any> {
    return this.firestore.collection(this.todoListPath).add(item.toServerResponse());
  }

  deleteItem(id: string): Promise<void> {
    return this.firestore.doc(`${this.todoListPath}/${id}`).delete();
  }

  updateItem(item: Todo): Promise<void> {
    return this.firestore.doc(`${this.todoListPath}/${item.id}`).update(item.toServerResponse());
  }

}
