import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { ExternalApi2Component } from './pages/external-api2/external-api2.component';
import { ExternalApi3Component } from './pages/external-api3/external-api3.component';
import {MatButtonModule} from '@angular/material/button';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeroComponent,
    HomeContentComponent,
    LoadingComponent,
    MainNavComponent,
    NavBarComponent,
    ExternalApiComponent,
    HomeComponent,
    ProfileComponent,
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    ExternalApi2Component,
    ExternalApi3Component,
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    FontAwesomeModule,
    MatCardModule,
    MatToolbarModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        allowedList: [
          `${env.dev.serverUrl}/lists`,
        `${env.dev.serverUrl}/lists/:listId`,
        // `${env.dev.serverUrl}/lists/:listId/tasks`
        
      ],
        
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// `${env.dev.serverUrl}/api/messages/protected-message`,`${env.dev.serverUrl2}`
