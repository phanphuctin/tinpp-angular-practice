import { Component } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { DeborahTodoComponent } from '../deborah-todo/deborah-todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent, DeborahTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'practice-angular';
}
