import React from 'react';
import { connect } from "react-redux";
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart} from '../../actions';

import './shopping-cart-table.css';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    return (
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    items.map((item, idx) => {
                        const { id, title, qty, total } = item;
                        return (
                            <tr key={id}>
                                <td>{idx + 1}</td>
                                <td>{title}</td>
                                <td>{qty}</td>
                                <td>${total}</td>
                                <td>
                                    <button
                                        onClick={() => onDelete(id)}
                                        className="btn btn-outline-danger btn-sm">
                                        <i className="fa fa-trash-o"></i>
                                    </button>
                                    <button
                                        onClick={() => onIncrease(id)}
                                        className="btn btn-outline-success btn-sm">
                                        <i className="fa fa-plus-circle"></i>
                                    </button>
                                    <button
                                        onClick={() => onDecrease(id)}
                                        className="btn btn-outline-warning btn-sm">
                                        <i className="fa fa-minus-circle"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
