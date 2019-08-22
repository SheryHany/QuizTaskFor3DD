import { Quiz } from 'src/app/_model/quiz';

export class QuizService{
    data: Quiz[];

    constructor(){
        this.data = [
            // {question: "how are you?",description:"wgsdg" ,ans1: "ans1", ans2: "ans2", ans3: "ans3", correctAns: "ans2"}
        ]
    }

    getAll(): Quiz[]{
        return this.data;
    }

    add(newQuestion: Quiz): void{
        this.data.push(newQuestion);
    }
}