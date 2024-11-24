import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TodoService } from '../todo.service';

@Component({
  selector: 'bzn-main',
  standalone: true,
  imports: [NgClass, ButtonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  visibleTodo
  todoService = inject(TodoService);

  completeTodo(id: number) {
    this.todoService.completeTodo(id);
  }
}
