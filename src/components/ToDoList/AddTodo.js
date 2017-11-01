import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import * as Actions from '../../actions';

class AddTodo extends React.Component {
    dispatch = undefined; 
    input = undefined;   

    constructor(props) {
        super(props);
        this.dispatch = props.dispatch;
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(){
        this.dispatch(Actions.addTodo(this.input.value));
        this.input.value = '';
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Nowe zadanie..." ref={e => this.input = e} />
                {' '}
                <Button bsSize="small" onClick={this.addTodo}>Dodaj</Button>
            </div>
        );
    }
}

let AddTodoContainer = connect()(AddTodo);

export default AddTodoContainer; 