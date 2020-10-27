import React from 'react';
import Loading from './loading.gif';

function Loader() {
    return (
        <React.Fragment>
            <img src={Loading} alt="Loading"/>
            <h3>Loading</h3>
        </React.Fragment>
    );
}

export default Loader;