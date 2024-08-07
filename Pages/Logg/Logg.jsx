import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../Store/Store.jsx';
import './Logg.scss';

function Logg() {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const setUser = useStore((state) => state.setUser);

    const navigate = useNavigate();



    const handleSubmit = (event) => {
        event.preventDefault()

        setUser({ fullName, email })

        navigate('/profile')

    }



    return (

        
            <div className="createprofile-container">

                <div className="symbol-container"></div>

                <h2>Välkommen till AirBean-familjen!</h2>

                <p className="createprofile-text">Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>

                <form className="createprofile-form" onSubmit={handleSubmit}>
                    <p>Namn</p>
                    <input
                        name="fullname"
                        type="text"
                        placeholder="Sixten Kaffelövér"
                        maxLength="100"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                    <p>E-post</p>
                    <input
                        name="email"
                        type="text"
                        placeholder="sixten.kaffelover@zocom.se"
                        maxLength="254"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    
                <button className='submit-button' type='submit' >Brew me a cup!</button>
                </form>

                <label>
                    <input
                        type="checkbox"
                        name="gdpr-ok"
                        required
                    />
                    <p>GDPR Ok!</p>
                </label>

            </div>

    )

}

export default Logg;