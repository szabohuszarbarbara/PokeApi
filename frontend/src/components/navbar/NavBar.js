import {useState, useContext} from "react";
import LoginModal from "../login/LoginModal";
import SearchPokemon from "../header/SearchPokemon";
import "../pokemonData/CardModal.css";
import "./NavBar.css";
import AuthContext from "../../context/authContext";
import {Link} from "react-router-dom";

function NavBar(props) {
    const [show, setShow] = useState(false);
    let {user, setUser} = useContext(AuthContext);

    const renderModal = () => {
        setShow(true);
    }
    const logout = ()=> {
        localStorage.clear();
        setUser(null);
    }

    return (
        <>
            <nav>
                <ul className='menu'>
                    <li><SearchPokemon /></li>
                    <li className="item"><Link to="/pokedex/"><button> {'PokeDex' }</button></Link></li>
                    {user? <li className="item"><Link to="/profile/"><button> {'Profile' }</button></Link></li> : null}

                    <li className="item"><button onClick={user? logout : renderModal}> {user ? 'Logout' : 'Login' }</button></li>
                </ul>
            </nav>

            <LoginModal show={show} setShow={setShow}/>
        </>
    );
}

export default NavBar;