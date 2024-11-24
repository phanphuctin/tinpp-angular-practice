import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ITodoList, TodoService } from './todo.service';
import { NgClass, NgFor, NgForOf } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';

export enum FilterEnum  {
  All = 'all',
  Active = 'active',
  Completed = 'completed'

}

@Component({
  selector: 'bzn-todo',
  standalone: true,
  imports: [CardModule, ButtonModule, FormsModule, InputTextModule, FooterComponent, MainComponent, HeaderComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  providers: [TodoService]
})
export class TodoComponent {
  todoService = inject(TodoService);
  // todoListComp = signal<ITodoList[]>([])
  filterEnum = FilterEnum;

  visibleTodo = this.todoService.todoList();


  



}
