import {useState} from "react";
import LoginModal from "../login/LoginModal";
import SearchPokemon from "../header/SearchPokemon";
import "../pokemonData/CardModal.css";
import "./NavBar.css";

function NavBar(props) {
    const [show, setShow] = useState(false);

    const renderModal = () => {
        setShow(true);
    }

    return (
        <>
            <nav>
                <ul className='menu'>
                    <li><SearchPokemon /></li>
                    <li className="item"><button onClick={renderModal}>Login</button></li>
                    <li className="item"><button onClick={renderModal}>Profile</button></li>
                </ul>
            </nav>

            <LoginModal show={show} setShow={setShow}/>
        </>
    );
}

export default NavBar;