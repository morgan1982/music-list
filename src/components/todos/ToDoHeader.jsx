import React, { Component } from 'react';
import './todos.scss';

export default class ToDoHeader extends Component {

    render () {
        return (
            <h1 className="title">{this.props.title}</h1>
            )
    }
}
