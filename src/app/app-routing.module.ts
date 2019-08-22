import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// import { UsersImagesComponent } from './users-images/users-images.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';

import { from } from 'rxjs';
import { QuestionNumberComponent } from './question-number/question-number.component';

// const routes: Routes = [
//   { path: 'app-users-images', component: UsersImagesComponent },
//   { path: 'app-header', component: HeaderComponent }
//   // { path: '**', component: NotFoundPageComponent },
//   // { path: '', component: HeaderComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'home', component: HomePageComponent},
    {path: 'question-numbers', component: QuestionNumberComponent},
    {path: 'create-quiz', component: CreateQuizComponent},
    {path: 'quiz', component: QuizPageComponent}
  ])],
  exports: [RouterModule]
})
// tslint:disable-next-line:no-trailing-whitespace
export class AppRoutingModule { 

// tslint:disable-next-line:eofline
}