import React, {Component} from 'react';

class Heading extends Component {

    render() {
    return <h1>{ this.props.title}</h1>;
    }
}

export default Heading;

// change to functional compoenent