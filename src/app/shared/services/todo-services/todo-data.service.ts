import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Todo} from '../../models/todo.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private readonly firestore: AngularFirestore
  ) { }

  private todoPath = '/todos';

  fetchAll(): Observable<Todo[]> {

    return this.firestore.collection<Todo[]>(this.todoPath)
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
    return this.firestore.doc(`${this.todoPath}/${id}`)
      .get().pipe(
        map(item => {
          return {
            id: item.id,
            ...item.data()
          } as any;
        })
      );
  }

  addItem(item: Todo) {
    this.firestore.collection(this.todoPath).add(item.toServerResponse());
  }

  deleteItem(id: string): Promise<void> {
    return this.firestore.doc(`${this.todoPath}/${id}`).delete().then(result => console.log(result));
  }

  updateItem(item: Todo): Promise<void> {
    return this.firestore.doc(`${this.todoPath}/${item.id}`).update(item.toServerResponse());
  }

}
