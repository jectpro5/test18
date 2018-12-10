import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    newTodo: string;
    newTodo2: string;
    todos: any;
    todoschecked: any;
    check = true;
    todoObj: any;
    todoObj2: any;
    // completed;

  constructor() {
      this.newTodo = '';
      this.newTodo2 = '';
      this.todos = [];
      this.todoschecked = [];
  }
    addTodo(event) {
        this.todoObj = {
            newTodo: this.newTodo,
            completed: false
        };
        this.todos.push(this.todoObj);
        this.newTodo = '';
        event.preventDefault();
        // if (this.completed === true) {
        //     this.todoschecked.push(this.todoObj);
        // }
    }

    deleteTodo(index) {
        this.todos.splice(index, 1);
    }

    deleteSelectedTodos() {
        // need ES5 to reverse loop in order to splice by index
        for ( let i = (this.todos.length - 1 ); i > -1; i--) {
            if (this.todos[i].completed) {
                this.todos.splice(i, 1);
            }
        }
    }
    addToList(event) {
        this.todoObj2 = {
            newTodo2: this.newTodo2
        };
        this.todoschecked.push(this.todoObj2);
        event.preventDefault();
        // if (this.completed === true) {
        //     this.todoschecked.push(this.todoObj);
        // }
    }

  ngOnInit() {
  }

}
