import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quiz } from 'src/app/_model/quiz';
import { QuizService } from 'src/app/_services/quiz.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  constructor(private quizService: QuizService, private router: Router, private route: ActivatedRoute) { }
  counter: number = 0;
  url:any
  selectedLevel
  correctAns: string;
  quiz: Quiz;

  ngOnInit() {
    // debugger
    // this.quiz = {};
      this.url = this.route.snapshot.queryParams.num;
      (<HTMLInputElement> document.getElementById("submit")).disabled = true;
  }
  onAdd(form: NgForm,event) {
    this.quiz = {};
    console.log(event);
    console.log(event.target.lastElementChild.innerText);
    // debugger
    const value = form.value;
    console.log(value);
    console.log(value.question);
    console.log(this.correctAns);
    this.quiz.question = value.question;
    console.log(this.quiz.question);
// debugger
    this.quiz.description = value.description;
    this.quiz.ans1 = value.ans1;
    this.quiz.ans2 = value.ans2;
    this.quiz.ans3 = value.ans3;
    this.quiz.correctAns = this.correctAns;
    console.log(this.quiz);


    this.quizService.add(this.quiz);
    this.counter = this.counter + 1;
    // debugger
    if (this.counter === +this.url) {
      (<HTMLInputElement> document.getElementById("add")).disabled = true;
      alert("please enter submit");
      (<HTMLInputElement> document.getElementById("submit")).disabled = false;
    }
    else{
      (<HTMLInputElement> document.getElementById("add")).disabled = false;
      form.reset();
      this.router.navigate(['/create-quiz'],{queryParams:{num: this.url}});
    }
  }
  showQuiz(){
      this.router.navigate(['/quiz']);
  }
  selected(event){
    // debugger
    console.log(event.target.value)
    this.correctAns = event.target.value;
    console.log(this.correctAns);
  }
}