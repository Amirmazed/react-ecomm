import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([])

    
    useEffect ( () => {
        
        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setDisplayProducts(data)    
        }
                )
    }, [])

    useEffect( () => {
        if(products.length) {
            const savedCart = getStoredCart();
            const storedCart = []
            for(const key in savedCart) {
            
            const addedProduct = products.find(product => product.key === key)
            if(addedProduct){
                const quantity = savedCart[key]
                addedProduct.quantity = quantity
               
                storedCart.push(addedProduct)
                
            }
            
            }
            setCart(storedCart)
        }
    },[products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // addToDb(product.key);
        // console.log(newCart)
    }

    // const handleSearch = e => {
    //     const searchText =  e.target.value;
    //     const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
    //     setDisplayProducts(matchedProduct)
    //     console.log(matchedProduct.length)
    // }

    return (
        <div>
            {/* <div className="search-container" >
                <input type="text" placeholder="search your input"
                onChange= {handleSearch}/>
            </div> */}

            <div className="shop-container">
            <div className="product-container left">
                {/* <h3>Product: {products.length}</h3> */}

                {
                    displayProducts.map(product => <Product product={product} key={product.key} handleAddToCart={handleAddToCart}></Product>)
                }

            </div>

            {/* cart this is */}

            <div className="cart-container">

               <Cart cart={cart}></Cart>
            </div>      
           
        </div>
        </div>
    );
};

export default Shop;