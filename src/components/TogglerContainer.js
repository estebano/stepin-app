import * as Actions from '../actions';
import { Toggler } from './Toggler';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.id
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChange: e => {
            let text = `Toggler: ${e.id}`;
            if (e.isToggleOn) {
                dispatch(Actions.addTodo(text));
            } else {
                dispatch(Actions.removeTodo(text));
            }
        }
    }
}

const TogglerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toggler);

export default TogglerContainer;
