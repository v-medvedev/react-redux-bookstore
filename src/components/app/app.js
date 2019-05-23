import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import ShopHeader from '../shop-header';
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";

import './app.css';

const App = (props) => {
    const { numItems, total } = props;
    return (
        <main role="main" className="container">
            <ShopHeader numItems={numItems} total={total} />
            <Switch>
                <Route
                    path="/"
                    component={HomePage}
                    exact />
                <Route
                    path="/cart"
                    component={CartPage}/>
            </Switch>
        </main>
    )
}

const mapStateToProps = ({ shoppingCart: { cartItems } }) => {
    const numItems = cartItems.reduce((total, current) => {
        total += current.qty;
        return total;
    }, 0);
    const total = cartItems.reduce((total, current) => {
        total += current.total;
        return total;
    }, 0);
    return {
        numItems,
        total
    };
};

export default connect(mapStateToProps)(App);
