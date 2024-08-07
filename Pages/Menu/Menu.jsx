import "../Menu/Menu.scss";
import NavigateButton from "../NavigateButton/NavigateButton.jsx";
import useStore from "../Store/Store.jsx";
import Cart from "../Cart/cart.jsx";

import bag from "../../src/assets/CartButton/bag.png";
import React from 'react';


function Menu() {

    const { addToCart, showCart, setShowCart } = useStore((state) => ({ // vi hämtar datan och tillstånden från vår Zustand-store

        addToCart: state.addToCart, // Här referar vi till addToCart som vi skapade i Zustand-store, och möjligheten att manipulera dess state. 
        showCart: state.showCart, // Showcart har ju false, vet vi ju. Detta deklarerade vi nästan först i Zustand-storen. 
        setShowCart: state.setShowCart, // setShowCart är uppdateringsfunktionen för vår cart. 

    }));


    const products = [
        { id: 1, name: 'Bryggkaffe', price: 49 },
        { id: 2, name: 'Caffè Doppio', price: 49 },
        { id: 3, name: 'Cappuccino', price: 49 },
        { id: 4, name: 'Latte Macchiato', price: 49 },
        // Lägg till fler produkter efter behov
      ];



    return (


        <div className='coffemenupage-container'>

            <NavigateButton to="/navet" buttonText="Navet"/>

            <button className="cart-button" onClick={() => setShowCart(!showCart)}><img src={bag} alt ="Visa varukorg"/></button>

            {showCart && (
            <div className="cart-overlay">
                <Cart />
            </div>
            )}

            <header className='coffemenupage-header'></header>

            <h1>Meny</h1>


        <nav className='coffemenu'> 
            <ul>
            {products.map((product) => (
                <li key={product.id} className='kaffe-item'>
                    <div className='kaffe-info'>
                        <button className='kaffe-button' onClick={() => addToCart(product)}>+</button>
                        <div className='kaffe-details'>
                            <h2 className='kaffe-title'>{product.name}</h2>
                            <p className='kaffe-description'>{product.price} kr</p>
                        </div>
                    </div>
                </li>

))}
</ul>
</nav>

<footer className='coffemenu-footer'></footer>

</div>
)
}

export default Menu;

