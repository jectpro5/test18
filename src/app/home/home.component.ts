import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    title = 'My Todos';

    todos = [
        {
            label: 'Bring bread',
            done: false,
            priority: 3
        },
        {
            label: 'Pay mobile bill',
            done: false,
            priority: 1
        },
        {
            label: 'Clean house',
            done: true,
            priority: 4
        },
        {
            label: 'Fix the bulb',
            done: false,
            priority: 5
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    addTodo(newTodoLabel) {
        const newTodo = {
            label: newTodoLabel,
            priority: 1,
            done: false
        };
        this.todos.push(newTodo);
    }

    deleteTodo(todo) {
        this.todos = this.todos.filter( t => t.label !== todo.label );
    }
}
