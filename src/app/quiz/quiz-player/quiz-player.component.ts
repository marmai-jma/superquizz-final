import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {QUIZZES} from '../../data/quizzes';
import {AnswersState, QuizStateManager} from '../quiz-state-manager.service';
import {Quiz} from '../../models/quiz';
import {Question} from '../../models/question';
import {Answer} from '../../models/answer';
import {QuizService} from '../../services/quiz.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz-player',
  templateUrl: './quiz-player.component.html',
  providers: [QuizStateManager],
})
export class QuizPlayerComponent implements OnInit {
  isPlaying = false;
  currentQuiz: Observable<Quiz>;
  currentQuestion: Observable<Question>;
  currentAnswer: Observable<Answer>;
  currentAnswers: Observable<AnswersState>;

  constructor(private route: ActivatedRoute,
              public qsm: QuizStateManager,
              private qs: QuizService) { }

  ngOnInit() {
    this.currentQuiz = this.qsm.getCurrentQuiz();
    this.currentQuestion = this.qsm.getCurrentQuestion();
    this.currentAnswer = this.qsm.getCurrentAnswer();
    this.currentAnswers = this.qsm.getCurrentAnswers();

    const quizId = +this.route.snapshot.paramMap.get('quizId');
    this.qs.loadQuiz(quizId)
      .subscribe(quiz => this.qsm.setQuiz(quiz));
  }

  startQuiz() {
    this.qsm.gotoFirstQuestion();
    this.isPlaying = true;
  }

  /*
  // Implémentation initiale "naïve"

  gotoNextQuestion() {
    this.currentQuestion = QUIZZES[0].questions[1];
    this.currentAnswer = new Answer({ questionId: this.currentQuestion.id, multipleChoicesAllowed: false });
  }

  gotoPreviousQuestion() {
    this.currentQuestion = QUIZZES[0].questions[0];
    this.currentAnswer = new Answer({ questionId: this.currentQuestion.id, multipleChoicesAllowed: false });
  }
  */

  onSubmitAnswer(answer: Answer) {
    this.qsm.addAnswer(answer);
  }

}
