import { useNavigate } from "react-router-dom";
import useStore from "../Store/Store.jsx";
import './cart.scss';

function Cart() {
    const { cart, updateProductQuantity, removeFromCart, sendOrder } = useStore((state) => ({
        cart: state.cart,
        updateProductQuantity: state.updateProductQuantity,
        removeFromCart: state.removeFromCart,
        sendOrder: state.sendOrder
    }));

    const navigate = useNavigate();

    // Take my money-funktionen
    const handleCheckout = () => {
        sendOrder();
        navigate('/status');
    };

    const increaseQuantity = (productId) => {
        const product = cart.find((product) => product.id === productId);
        if (product) {
            updateProductQuantity(productId, product.quantity + 1);
        }
    };

    const decreaseQuantity = (productId) => {
        const product = cart.find((product) => product.id === productId);
        if (product) {
            if (product.quantity > 1) {
                updateProductQuantity(productId, product.quantity - 1);
            } else {
                removeFromCart(productId);
            }
        }
    };

    // Beräkna totalen
    const total = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

    return (
        <div className="cart-overlay">
            <div className="cart">
                <h1>Din beställning</h1>
                {cart.map((product) => (
                    <div className="cart-item" key={product.id}>
                        <h2>
                            {product.name}
                            <span className="counter">
                                <button onClick={() => decreaseQuantity(product.id)}>←</button>
                                {product.quantity}
                                <button onClick={() => increaseQuantity(product.id)}>→</button>
                            </span>
                        </h2>
                        <p>{product.price * product.quantity}kr</p>
                    </div>
                ))}
                <h2>Total <span className="total">{total}kr</span></h2>
                <p>inkl moms + drönarleverans</p>
                <button className="submitorder-button" onClick={handleCheckout}>Take my money!</button>
            </div>
        </div>
    );
}

export default Cart;
