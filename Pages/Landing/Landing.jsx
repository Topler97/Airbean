import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Landing/Landing.scss";

function Landing() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/menu'); 
        }, 5000); // Väntar 5000 ms = 5 sekunder innan omdirigering

        return () => clearTimeout(timer); // Rensar timern om komponenten avmonteras innan timern löper ut
    }, [navigate]);

    return (
        <div className='landing-container'>
            <h1>Välkommen!</h1>
            <p>Du kommer automatiskt att skickas vidare till hemsidan inom kort...</p>
        </div>
    );
}

export default Landing;



