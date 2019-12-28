import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuizItemComponent} from './quiz-item/quiz-item.component';
import {QuizQuestionComponent} from './quiz-question/quiz-question.component';
import {QuizNavComponent} from './quiz-nav/quiz-nav.component';
import {QuizPlayerComponent} from './quiz-player/quiz-player.component';


const quizRoutes: Routes = [
  { path: 'quizzes', component: QuizListComponent },
  { path: 'quiz/:quizId', component: QuizPlayerComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(quizRoutes)
  ],
  declarations: [
    QuizListComponent, QuizItemComponent,
    QuizPlayerComponent, QuizNavComponent, QuizQuestionComponent
  ],
  exports: [
    QuizPlayerComponent
  ]
})
export class QuizModule { }
