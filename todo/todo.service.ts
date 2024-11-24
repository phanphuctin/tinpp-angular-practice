import { Injectable, signal } from '@angular/core';

export interface ITodoList {
    id: number;
    text: string;
    isCompleted: boolean;
}

@Injectable()
export class TodoService {
    todoList = signal<ITodoList[]>([]);

    addNewTodo(newTodo: ITodoList) {
        this.todoList.update((todos) => [...todos, newTodo])
    }

    completeTodo(id: number) {
        this.todoList.update(todos => 
            todos.map((todo) => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo)
        );
    }

    filterTodo(type) {
        switch (type) {
            case 'active':
                return this.todoList().filter((todo) => !todo.isCompleted )
            case 'completed':
                return this.todoList().filter((todo) => todo.isCompleted )
            
            default:
                return this.todoList();
        }
    }
}
