import React, { Component } from 'react';
import './grid-block.css';


class GridBlock extends Component {
    state = {  }
    render() { 
        return ( 
            <div key={this.props.num} className="container">
                <img src={this.props.source} alt={this.props.tilte} />
                <h4>{this.props.title}</h4>
            </div>
         );
    }
}
 
export default GridBlock;

// change to functional component 