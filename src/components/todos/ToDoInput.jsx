import React, { Component } from 'react';


export default class ToDoInput extends Component {

    constructor(props) {
        super(props);

    this.state = {
        value: "test"
    };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);

    }
    handleChange(e) {
        console.log(this.state.value);
    }

    addTodo(todo) {
        console.log("Todo: ", todo);
    }


    render() {


        return (
            <div>
               <input type="text" value="" onChange={this.handleChange} />
               <button className="input-btn btn-add" onClick={ () => this.addTodo(this.state.value) }>Add</button>
            </div>
            );
    }
}
