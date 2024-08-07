import '../Profile/Profile.scss';
import useStore from '../Store/Store';
import NavigateButton from '../NavigateButton/NavigateButton.jsx';


function Profile() {

    const { user, orders } = useStore(state => ({
        user: state.user,
        orders: state.orders // Hämta orders från storen och dess state
        
    }));

    if (!user) {
        return <div>Du måste logga in för att kunna se din profil.</div>
    }


    return (
         
        <div className='profilepage-container'>
            <header className='profilepage-header'>
                <NavigateButton to="/navet" buttonText="Navet"/>
            </header>
            <div className='profilepicture-container'></div>
            <h3>{user.fullName}</h3>
            <p>{user.email}</p>



            <div className="orderhistory-container">
                <h3>Orderhistorik</h3>
                {orders.map((order, index) => (
                    <div key={index} className="order-item">
                        <div className="order-left">
                            <h4>#{order.ordernumber}</h4>
                            <span className='date'>{order.orderDate}</span>
                        </div>
                        <div className="order-right">
                            <span className='total'>Total ordersumma: {order.total}kr</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile