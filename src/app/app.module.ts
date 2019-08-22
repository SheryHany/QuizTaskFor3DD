import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule , Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { QuizService } from './_services/quiz.service';
import { QuestionNumberComponent } from './question-number/question-number.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    CreateQuizComponent,
    QuizPageComponent,
    QuestionNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
