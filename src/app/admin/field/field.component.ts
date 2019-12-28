import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html'
})
export class FieldComponent {
  @Input() label: string;
  @Input() control: FormControl;
}
