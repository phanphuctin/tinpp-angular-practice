import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'bzn-deborah-todo',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './deborah-todo.component.html',
  styleUrl: './deborah-todo.component.scss'
})
export class DeborahTodoComponent {

  MEMBER_URL = 'https://jsonplaceholder.typicode.com/users';
  TODO_URL = 'https://jsonplaceholder.typicode.com/todos';


  http = inject(HttpClient);

  members = this.http.get(this.MEMBER_URL)

}
