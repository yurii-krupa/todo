import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, IUser} from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit, OnDestroy {

  user: IUser = {
    email: '',
    password: ''
  };

  isLoadingMode = false;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit() {
  }

  signUp(): void {
    this.isLoadingMode = true;
    this.authService.signUp(this.user)
      .then(res => {
        this.authService.userData.next(new User(res.user));
        this.isLoadingMode = false;
        this.router.navigate(['todo-list']);
      })
      .catch(err => {
        console.log(err);
        this.isLoadingMode = false;
        this.openSnackBarError(err);
      });
  }

  signIn(): void {
    this.isLoadingMode = true;
    this.authService.signIn(this.user)
      .then(res => {
        this.authService.userData.next(new User(res.user));
        this.isLoadingMode = false;
        this.router.navigate(['todo-list']);
      })
      .catch(err => {
        console.log(err);
        this.isLoadingMode = false;
        this.openSnackBarError(err);
      });
  }

  openSnackBarError(error): void {
    this.snackBar.open(`${error.code} - ${error.message}`, '', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }

}
