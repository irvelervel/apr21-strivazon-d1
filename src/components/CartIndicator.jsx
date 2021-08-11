import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  cartLength: state.cart.products.length
})

// const mapStateToProps = state => state

const CartIndicator = ({ history, cartLength }) => (
  <div className="ml-auto mt-2">
    <Button color="primary" onClick={() => history.push("/cart")}>
      <FaShoppingCart />
      <span className="ml-2">{cartLength}</span>
    </Button>
  </div>
);

export default connect(mapStateToProps)(withRouter(CartIndicator));
