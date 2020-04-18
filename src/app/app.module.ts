import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HeaderModule } from './shared/components/header/header.module';
import { TodoDataService } from './shared/services/todo-services/todo-data.service';
import { TodoListModule } from './todo-list/todo-list.module';
import { AuthModule } from './shared/components/auth/auth.module';
import { AuthService } from './shared/services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HeaderModule,
    TodoListModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [
    TodoDataService,
    AuthService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
