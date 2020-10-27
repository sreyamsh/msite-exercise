import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './stickyheader.css'
import logo from './logo.PNG';

class StickyHeader extends Component {
    render () {
        return (
            <React.Fragment>
                <header className="Page-header">
                    <Link to='/'>
                        <img src={logo} alt="logo" id="logo" />
                    </Link>    
                    <h3 className="header-title">fernsnpetals</h3>
                </header>
            </React.Fragment>
        );

    }
}

export default StickyHeader;