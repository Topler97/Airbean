import useStore from '../Store/Store';
import { useNavigate } from 'react-router-dom';
import "../Status/Status.scss";

function Status() {
    const navigate = useNavigate();

    // Hämta orderDetails direkt från storen
    const orderDetails = useStore(state => state.orderDetails);

    const handleSubmit = () => {
        navigate('/menu');
    };

    // Använd direkt orderDetails för att visa information, med en kontroll för att hantera laddningstillstånd
    return (
        <div className='statuspage-container'>
            <p id='ordernumbertext'>Ordernummer: {orderDetails ? orderDetails.ordernumber : 'Laddar...'}</p>
            
            <div className='droneimage-container'></div>
            
            <h1>Din beställning är på väg!</h1>
            
            {/* Här antar vi att eta är ett nummer. Om inte, justera detta för att hantera andra datatyper korrekt */}
            <h3>{orderDetails ? `${orderDetails.eta} minuter` : 'Beräknar...'}</h3>
            
            <button className='reusable-button' onClick={handleSubmit}><h3>Ok, cool!</h3></button>
        </div>
    );
}

export default Status;