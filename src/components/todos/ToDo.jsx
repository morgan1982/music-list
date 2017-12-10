import React, { Component } from 'react';
import ToDoHeader from './ToDoHeader';
import './todos.scss';
import ToDoInput from './ToDoInput';
import ToDoItem from './ToDoItem';

export default class ToDo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {
                    id: 0,
                    text: "make dinner tonight",
                },
                {
                    id: 1,
                    text: "buy dremel tools",
                },
                {
                    id: 2,
                    text: "dremmel the back",
                },
            ],
            nextId: 3,
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo (todoText) {
        // creates a copy of the todos
        let todos = this.state.todos.slice();
        console.log("the sliced todos: ", todos)
        todos.push({id: this.state.nextId, text: todoText});
        this.setState({
            todos,
            nextId: ++this.state.nextId,
        })
    };
    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !== id)
        })
    };


    render () {

        return (
            <div>
                <div className="todo-wrapper">
                    <ToDoHeader className="title" title="Urgent"/>
                    <ToDoInput todoText="" addTodo={this.addTodo}/>
                    <ul>
                        {
                            this.state.todos.map((todo) => {
                                return <ToDoItem
                                        todo={todo}
                                        key={todo.id}
                                        id={todo.id}
                                        removeTodo={this.removeTodo}
                                        value={todo.text} />
                            })
                        }
                    </ul>
                </div>
            </div>
            )
    }
}
