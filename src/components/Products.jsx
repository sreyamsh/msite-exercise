import React, { Component, Suspense }  from 'react';
import Heading from './Heading';
import Loader from './Loader';
import GridBlock from './grid-block';
import './Products.css';
import { connect } from 'react-redux';
import { fetchData } from '../actions/productActions';
// const GridBlock = React.lazy(() => import('./grid-block'));

class Products extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        if(this.props.products.length === 0 || !Array.isArray(this.props.products.data)) {
            return <Loader />;
        }

        const gridBoxes = this.props.products.data.map((photo) => {
            return (
                <GridBlock key={photo.id} source={photo.url} title={photo.title} />
            );
        });

        return (
            <React.Fragment>
                <Heading title={this.props.title} />
                <Suspense fallback={<Loader className="wrapper" />} >
                    <div className="wrapper">{gridBoxes}</div>
                </Suspense>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items
});

export default connect(mapStateToProps, { fetchData })(Products);