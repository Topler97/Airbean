import { Link } from 'react-router-dom';
import useStore from '../Store/Store';
import "./Navet.scss";


function Nav() {

    const user = useStore((state) => state.user)


    return (

        <div className='menupage-container'>


            <nav>
                <ul>
                    <li><Link to="/menu">Meny</Link></li>
                    <div className='horizontal-line'></div>
                    <li><Link to="/about">Vårt kaffe</Link></li>
                    <div className='horizontal-line'></div>
                    
                    <li>
                        {user ? <Link to="/profile">Min profil</Link> : <Link to="/logg">Skapa Profil</Link>}
                    </li>

                    <div className='horizontal-line'></div>
                    <li><Link to="/status">Orderstatus</Link></li>


                </ul>
            </nav>
        </div>

    )
}

export default Nav;