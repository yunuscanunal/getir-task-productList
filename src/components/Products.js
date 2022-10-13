import React, { Component } from 'react'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import util from "../util";

export default class Products extends Component {
    render() {
        const productItems = this.props.products.map(product => (
            <div className='col-sm-3' key={product.added}>
                <div className='thumbnail text-center'>
                    <a href={'#${product.added}'} onClick={(e) => this.props.handleAddToCart(e, product)}>
                        <img src={"https://via.placeholder.com/300"} alt={product.name} />
                        <p>
                            {product.name}
                        </p>
                    </a>
                    <div>
                        <b>{util.formatCurrency(product.price)}</b>
                        <div>
                            <button className="btn btn-primary btn-xs" onClick={(e) => this.props.handleAddToCart(e, product)}><ShoppingCartIcon />{" Add To Cart "}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ));
        return (
            <div className='row'>
                {productItems}
            </div>
        )
    }
}
