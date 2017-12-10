import React, { Component } from 'react';


export default class ToDoInput extends Component {

    constructor(props) {
        super(props);

    this.state = {
        value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);

    }

    handleChange(e) {
        console.log(e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    addTodo(todo) {
        console.log("todo value: ", todo);
        if (todo.length > 0) {
            this.props.addTodo(todo);
            this.setState({value: ''})
                }
    }


    render() {


        return (
            <form className="input-wrapper">
               <input type="text" value={this.state.value} onChange={this.handleChange} />
               <button type="submit" className="input-btn btn-add" onClick={() => this.addTodo(this.state.value)}>Add</button>
            </form>
            );
    }
}
