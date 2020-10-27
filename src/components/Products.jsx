import React, {Component} from 'react';
import axios from './axios-instance';
import GridBlock from './grid-block';
import Heading from './Heading';
import './Products.css';

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    // use arrow function
    getData() {
        axios
            .get('photos?_limit=10')
            .then(res => this.setState({ data : res.data }))
            .catch(err => console.log(err))
    }

    render() {
        const gridBoxes = this.state.data.map((photo) => {
            return (
                <GridBlock num={photo.id} source={photo.url} title={photo.title} />
            );
        });

        return (
            <React.Fragment>
                <Heading title={this.props.title} />
                <div className="wrapper">{gridBoxes}</div>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.getData();
    }
}

export default Products;