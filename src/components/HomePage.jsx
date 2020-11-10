import React, {Component} from 'react';
import Heading from './Heading';
import GridBlock from './grid-block';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { connect } from 'react-redux';
import { fetchData } from '../actions/homeActions';

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        if(this.props.home.length === 0 || Array.isArray(this.props.home.data)){
            return <Loader />;
        }

        return (
            <React.Fragment>
                <Heading title={this.props.title} />
                <GridBlock source={this.props.home.data.url} title={this.props.home.data.title} />
                <Link  to='/products-list' >See full List</Link>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    home: state.home.items
});

export default connect(mapStateToProps, { fetchData })(HomePage);