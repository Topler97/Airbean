import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav/Nav.jsx';
import '../Header/header.scss';


function Header() {

  const [isNavVisible, setIsNavVisible] = useState(false);
  const navigate = useNavigate();


  
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
    navigate('/menu');
  };





  return (

    <header>

      <button onClick={toggleNav}>Meny/Nav</button>
      {isNavVisible && <Nav />}

    </header>

  )

}

export default Header;