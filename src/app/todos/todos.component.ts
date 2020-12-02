import { Component } from '@angular/core';
import { style, trigger, transition, animate, state, keyframes, animation, useAnimation, } from '@angular/animations';
import { bounceOutLeftAnimation, fade, slide, fadeInAnimation } from 'app/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [trigger('todoAnimation',
    [
      transition(':enter',
        [useAnimation(fadeInAnimation, {
          params: {
            duration: '500ms',
            easing: 'ease-out'
          }
        })]
      ),
      transition(':leave',
        [style({ backgroundColor: 'red' }), animate(1000), useAnimation(bounceOutLeftAnimation)]),
    ]
  )]
  // animations: [slide]
  // animations: [fade]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
