import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'bzn-header',
  standalone: true,
  imports: [FormsModule, InputTextModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  value: string = '';

  todoService = inject(TodoService);

  addNew() {
    if (!this.value) return;
    const newTodo = {
      id: Math.random() * 10,
      text: this.value,
      isCompleted: false
    }
    this.todoService.addNewTodo(newTodo);
    this.value = '';

  }

  onKeyDown(event) {
    if (event.key === 'Enter') {
      this.addNew();
    }
  }
}
