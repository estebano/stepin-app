import React from 'react'
import PropTypes from 'prop-types'

class Link extends React.Component {
    onClick = undefined;

    constructor(props) {
        super(props);
        this.onClick = props.onClick.bind(this);
    }

    render() {
        if (this.props.active) {
            return (<span>{this.props.children}</span>);
        }
        else {
            return (
                <a href="#" onClick={e => {
                    e.preventDefault();
                    this.onClick();
                }}>
                    {this.props.children}
                </a>
            );
        }
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link