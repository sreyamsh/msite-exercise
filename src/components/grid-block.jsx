import React from 'react';
import './grid-block.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';


function GridBlock(props) {
    return (
        <div className="container">
            <LazyLoadImage src={props.source} alt={props.title}/>
            <h4>{props.title}</h4>
        </div>
    );
}
 
export default GridBlock;