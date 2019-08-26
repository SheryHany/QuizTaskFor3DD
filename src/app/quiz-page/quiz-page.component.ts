import { Component, OnInit } from '@angular/core';
import { QuizService } from '../_services/quiz.service';


@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {
  questions
  constructor(private questionsServise:QuizService) { 
}

  ngOnInit() {
    this.questions=this.questionsServise.getAll();
  }

}
