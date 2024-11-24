import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FilterEnum } from '../todo.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'bzn-footer',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  filterEnum = FilterEnum;
  todoService = inject(TodoService);
  chosenFilterSig = signal<FilterEnum>(FilterEnum.All)


  filterTodo(filterType: FilterEnum) {
    this.chosenFilterSig.set(filterType)

  }
}
