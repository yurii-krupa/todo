import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription = new Subscription();

  isAuthenticated = false;

  constructor(
    private authService: AuthService
  ) { }


  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.authService.userData.subscribe(user => {
        console.log(user);
        this.isAuthenticated = !!user;
      })
    );
  }

  logOut() {
    this.authService.signOut();
  }

}
