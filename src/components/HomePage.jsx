import React, {Component} from 'react';
import Heading from './Heading';
import axios from './axios-instance';
import GridBlock from './grid-block';
import { Link } from 'react-router-dom';
import Loader from './Loader';


class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    // use arrow function
    getData = () => {
        axios
            .get('/photos/1')
            .then(res => this.setState({ data: res.data }))
            .catch(err => console.log(err))
    }

    render() {

        if(this.state.data.length === 0){
            return <Loader />;
        }

        return (
            <React.Fragment>
                <Heading title={this.props.title} />
                <GridBlock source={this.state.data.url} title={this.state.data.title} />
                <Link  to='/products-list' >See full List</Link>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.getData();
    }
}

export default HomePage;