import { Component, OnInit } from '@angular/core';

import {QuizService} from '../../services/quiz.service';
import {Quiz} from '../../models/quiz';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html'
})
export class QuizListComponent implements OnInit {
  quizList: Quiz[] = [];

  constructor(private qs: QuizService) { }

  ngOnInit() {
    this.qs.loadQuizzes()
      .subscribe(quizzes => this.quizList = quizzes);
  }

}
