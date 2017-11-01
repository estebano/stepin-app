import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

class Link extends React.Component {
    onClick = undefined;

    constructor(props) {
        super(props);
        this.onClick = props.onClick.bind(this);
    }

    render() {
        if (this.props.active) {
            return (<Button bsStyle="primary" bsSize="small" disabled>{this.props.children}</Button>);
        }
        else {
            return (<Button bsStyle="primary" bsSize="small" onClick={e => {
                e.preventDefault();
                this.onClick();
            }}>{this.props.children}</Button>);
        }
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link