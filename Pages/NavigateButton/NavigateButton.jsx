
import { useNavigate } from 'react-router-dom';
import "../NavigateButton/NavigateButton.scss";


function NavigateButton({ to, buttonText = "Navet" }) {


  const navigate = useNavigate();


  const handleNavigate = () => {
    navigate(to);
  };


  return (
    <button className='navigate-button' onClick={handleNavigate}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
  
}

export default NavigateButton;