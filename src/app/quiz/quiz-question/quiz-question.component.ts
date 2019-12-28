import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

import {Question} from '../../models/question';
import {Answer} from '../../models/answer';
import {Choice} from '../../models/choice';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styles: []
})
export class QuizQuestionComponent implements OnChanges {
  @Input() question: Question;
  @Input() answer: Answer;
  @Output() submit = new EventEmitter<Answer>();
  isAnswered = false;
  isSubmitted: boolean;

  constructor() { }

  ngOnChanges() {
    this.isSubmitted = this.answer.isAnswered();
  }

  clickChoice(choice: Choice) {
    if (this.isSubmitted) { return; }
    if (this.isChoiceSelected(choice)) {
      this.answer.removeChoice(choice);
    } else {
      this.answer.addChoice(choice);
    }
    this.isAnswered = this.answer.isAnswered();
  }

  isChoiceSelected(choice: Choice): boolean {
    return this.answer.hasChoice(choice);
  }

  submitAnswer() {
    this.isSubmitted = true;
    this.submit.emit(this.answer);
  }

  get submitBtnLabel(): string {
    return !this.isSubmitted ? 'Soumettre' : this.answer.isCorrect ? 'CORRECT' : 'INCORRECT';
  }

  get submitBtnClass(): string {
    return !this.isSubmitted ? 'btn-primary' : this.answer.isCorrect ? 'btn-success' : 'btn-danger';
  }

  // Charge une nouvelle question et une nouvelle réponse.
  gotoNextQuestionTEMP() {
    this.question = new Question({
      'id': 35,
      'title': 'Angular est vraiment trop canon.',
      'choices': [
        { 'text': 'Vrai', 'isCorrect': true },
        { 'text': 'Faux'}
      ],
      'explanation': 'À ce stade, comment ne pas en être persuadé ? 😝'
    });
    this.answer = new Answer({
      questionId: 35,
      multipleChoicesAllowed: false
    });
    // this.ngOnInit();
  }
}
