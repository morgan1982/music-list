import React, { Component } from 'react';
import './todoitem.scss';


export default class ToDoItem extends Component {

    constructor(props) {
        super(props);

    }

    removeTodo(id) {
        this.props.removeTodo(id)
    }


    render() {

        return (
            <div className="todoWrapper">
                <div className="todotext">{this.props.value}</div>
                <button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>remove</button>
            </div>
            )
    }
}
