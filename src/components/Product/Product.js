import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'



const Product = (props) => {
    // console.log(props)

    const {name, img, price,  Role, Age, Country} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="name">Name: {name}</h4>
                <p><small>Role: {Role}</small></p>
                <p>Age: {Age}</p>
                <p>Country: {Country}</p>
                <p>Salary: {price}</p>



                <br />
                <button onClick={()=> props.handleAddToCart(props.product)} className="purchase"> {element} add to cart</button>
            </div>
        </div>
    );
};

export default Product;<h2>this is product</h2>