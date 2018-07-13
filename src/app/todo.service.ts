import { Injectable } from '@angular/core';
import { Init } from './init.todos';

@Injectable()
export class TodoService extends Init {

  constructor() {
    super();
    console.log('Service Injected...');
    this.load();
   }

   getTodos() {
     const todos = JSON.parse(localStorage.getItem('todos'));
     return todos;
   }

   addTodo(newTodo) {
    const todos = JSON.parse(localStorage.getItem('todos'));
    // Add New Todo
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
   }

   deleteTodo(todoText) {
    const todos = JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].text === todoText) {
        todos.splice(i, 1);
      }
    }
    // Set New Todos
    localStorage.setItem('todos', JSON.stringify(todos));
   }

   updateTodo(oldText, newText) {
    const todos = JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].text === oldText) {
        todos[i].text = newText;
      }
    }
    // Set New Todos
    localStorage.setItem('todos', JSON.stringify(todos));
   }

}
