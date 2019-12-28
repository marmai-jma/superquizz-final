import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { QuizModule } from './quiz/quiz.module';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';

// Providers
import { QuizService } from './services/quiz.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canActivate: [AuthGuard]
  },
];


@NgModule({
  declarations: [
    AppComponent, NavbarComponent, FooterComponent, HomeComponent, LoginComponent
  ],
  imports: [ BrowserModule, HttpClientModule, QuizModule, RouterModule.forRoot(appRoutes) ],
  providers: [
    QuizService,
    { provide: 'JSON_SERVER_URL', useValue: 'http://localhost:3004' },
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
