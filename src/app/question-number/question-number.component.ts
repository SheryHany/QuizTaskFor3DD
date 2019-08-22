import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-number',
  templateUrl: './question-number.component.html',
  styleUrls: ['./question-number.component.css']
})
export class QuestionNumberComponent implements OnInit {

  constructor(private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  onSelect(f:NgForm,event){
    console.log(event);
    // debugger
    console.log(f);
    console.log(event.target.elements[0].checked);
    if (event.target.elements[0].checked == false && event.target.elements[1].checked == false && event.target.elements[2].checked == false) {
      alert("please choose number");
    }else{
      const value=f.value;
      const questNum=value.blankRadio;
      this.router.navigate(['/create-quiz'],{queryParams:{num:questNum}});
    }
  }
}
