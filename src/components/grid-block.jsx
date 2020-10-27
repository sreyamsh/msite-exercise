import React from 'react';
import './grid-block.css';

function GridBlock(props) {
    return (
        <div className="container">
            <img src={props.source} alt={props.title}/>
            <h4>{props.title}</h4>
        </div>
    );
}
 
export default GridBlock;

// change to functional component 