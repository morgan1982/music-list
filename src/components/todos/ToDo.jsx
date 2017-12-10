import React, { Component } from 'react';
import ToDoHeader from './ToDoHeader';
import './todos.scss';
import ToDoInput from './ToDoInput';


export default class ToDo extends Component {

    constructor(props) {
        super(props);


    }

    render () {

        return (
            <div>
                <div className="todo-wrapper">
                    <ToDoHeader className="title" title="Urgent"/>
                    <ToDoInput />
                </div>
            </div>
            )
    }
}
