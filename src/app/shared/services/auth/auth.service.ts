import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user.model';
import { AngularFireAuth } from '@angular/fire/auth';

export interface IUser {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = new BehaviorSubject<User>(null);

  constructor(
    private afAuth: AngularFireAuth,
  ) {
    this.afAuth.authState
      .subscribe(res => {
        !!res ? this.userData.next(new User(res)) : this.userData.next(null);
      });
  }

  signUp(user: IUser) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  signIn(user: IUser) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  signOut(): void {
    this.afAuth.auth.signOut()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

}
