import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { QuizStateManager } from '../quiz/quiz-state-manager.service';


@Injectable()
export class CanDeactivateQuiz implements CanDeactivate<any> {
  constructor(private qsm: QuizStateManager) {}

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.qsm.hasPendingChanges) {
      return confirm('Vous avez des réponses en cours. Voulez-vous poursuivre et perdre vos réponses ?');
    }
    return true;
  }
}
