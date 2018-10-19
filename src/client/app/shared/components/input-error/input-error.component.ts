import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-error',
  templateUrl: './input-error.component.html',
  animations: [
    trigger('show', [
      transition('* => *', [
        style({ transform: 'translateY(-25%)' }),
        animate('30ms', style({ transform: 'translateY(0%)' })),
      ]),
    ]),
  ],
})
export class InputErrorComponent {
  @Input() error: string;
}
