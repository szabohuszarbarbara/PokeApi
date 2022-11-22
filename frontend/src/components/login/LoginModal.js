import {useContext, useState} from "react";
import "../pokemonData/CardModal.css"
import Pikachu from"../img/pikachu.jpg";
import AuthContext from "../../context/authContext";

function LoginModal(props) {
    const setShow = props.setShow
    let {setUser} = useContext(AuthContext);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const closeModal = () => {
        setShow(false);
    }

    const clickLogin = async (e) => {
        e.preventDefault();
        const payload = {
            'username': username,
            'password': password
        };
        const user = await getUserData('/login', payload);
        if (user.accessToken) {
            localStorage.setItem("user", JSON.stringify(user));
            setUser(user);
            closeModal();
        }
    }

    const getUserData = async (url, payload) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"},
            body: JSON.stringify(payload),
        })
        return await response.json();}

    if (!props.show) { return null; }

    return (
        <div className={"modal-backdrop"} onClick={closeModal}>
            <div className={"modal-container"} onClick={e => e.stopPropagation()}>
                <div className={`stripe "red"`} ></div>
                <div className={"close-modal"} onClick={closeModal}>X</div>

                    <form className='modalForm' onSubmit={clickLogin}>
                        <h1 className='loginWelcomeText'>Welcome Back!</h1>
                        <div className='inputBox'>
                            <input type="text" required="required" onChange={ e => setUserName(e.target.value)} value={username}/>
                            <span>Username</span>
                            <i></i>
                        </div>
                        <div className='inputBox'>
                            <input type="password" required="required" onChange={e => setPassword(e.target.value)} value={password}/>
                            <span>Password</span>
                            <i></i>
                        </div>
                        <button className='modalButton' type='submit' >Log In</button>
                    </form>

            </div>
        </div>

    );
}

export default LoginModal;