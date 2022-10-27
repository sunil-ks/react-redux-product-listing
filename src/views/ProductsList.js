import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/actions/index";
import { INITIATED, FAILED } from "../config";
import Product from "../components/Product";
import LoadingIndicator from "../components/LoadingIndicator";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsListUpdated: false,
    };
  }

  componentDidMount() {
    // Make an API call to fetch all products
    this.props.fetchProducts();
  }

  render() {
    // check if the required data to be displayed is present in the state.

    // If the required data is present in the state, show the details to the user.

    const data = this.props;

    return (
      <React.Fragment>
        <Container className="mt-5 mb-5">
          <div className="d-flex justify-content-between align-items-center p-2 background--light-blue mb-3">
            <h3 className="mb-0">
              <strong>Women's tops</strong>
            </h3>
          </div>
          {/* Show loading indicator to the user if data is being fetched from the backend. */}
          {this.props.productsListDataStatus === `${INITIATED}` && (
            <div className="text-center mt-5 fixed-right-top">
              <div>
                <LoadingIndicator />
                <small>Loading...</small>
              </div>
            </div>
          )}

          {/* Display the error message to the user if any error has occured. */}
          {this.props.productsListDataStatus === `${FAILED}` && (
            <div className="text-center mt-5 centered">
              <p className="mt-3">
                Oops! Something went wrong. Please try again later.
              </p>
            </div>
          )}

          <Row>
            {data.allProducts && data.allProducts.length ? (
              data.allProducts.map((product, index) => {
                return (
                  <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={3}
                    className="mb-3"
                    key={product.index}
                  >
                    {/* Passing the relevant props to the reusable component */}
                    <Product
                      name={product.productName}
                      price={product.price}
                      image={product.productImage}
                      isExclusive={product.isExclusive}
                      isSale={product.isSale}
                      size={product.size}
                    />
                  </Col>
                );
              })
            ) : (
              <div className="text-center p-5">No results found.</div>
            )}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

const mapStateToProps = (state) => ({
  allProducts: state.shopping.allProducts,
  productsListDataStatus: state.shopping.productsListDataStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
