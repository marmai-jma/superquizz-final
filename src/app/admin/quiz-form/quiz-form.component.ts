import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {FakeQuizService} from '../fake-quiz.service';
import {Quiz} from '../../models/quiz';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html'
})
export class QuizFormComponent implements OnInit {
  currentQuiz: Quiz;  // quiz en cours d'édition
  quizForm: FormGroup;

  constructor(private fb: FormBuilder,
              private qs: FakeQuizService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // Tente de récupérer l'id du quiz à éditer (vaudra NaN si pas d'id).
    const quizId = +this.route.snapshot.params['quizId'];

    if (quizId) {   // ÉDITION
      this.qs.loadQuiz(quizId).subscribe(quiz => {
        this.currentQuiz = quiz;
        this.buildForm();
      });
    } else {   // CRÉATION
      this.currentQuiz = new Quiz();
      this.buildForm();
    }
  }

  buildForm() {
    this.quizForm = this.fb.group({
      title: [this.currentQuiz.title, [Validators.required, Validators.minLength(3)]],
      description: [this.currentQuiz.description, Validators.required],
      canRetryQuestion: [this.currentQuiz.canRetryQuestion],
    });
  }

  saveQuiz() {
    // Fusionne les données du form avec le quiz en cours d'édition.
    const quiz = Object.assign(this.currentQuiz, this.quizForm.value);
    // Enregistre le quiz mis à jour.
    this.qs.saveQuiz(quiz).subscribe(() => {
      // ICI on est sûr que le quiz a été enregistré.
      alert('Quiz enregistré avec succès');
      // Redirige l'utilisateur vers la liste.
      this.router.navigate(['..'], {relativeTo: this.route});
    });
  }

}
