import {Component, Input} from '@angular/core';

import {Quiz} from '../../models/quiz';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styles: []
})
export class QuizItemComponent {
  @Input() quiz: Quiz;
}
