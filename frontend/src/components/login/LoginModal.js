import {useState} from "react";
import "../pokemonData/CardModal.css"
import Pikachu from"../img/pikachu.jpg";

function LoginModal(props) {
    const setShow = props.setShow
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState("");

    const closeModal = () => {
        setShow(false);
    }
    const validatePassword = (e) => {
        if (password !== confirmPassword) {
            setError("Password and Confirm Password does not match.");
        } else {
            setError("");
        }

    }
/*    const clickRegister = async (e) => {
        e.preventDefault();
        const payload = {
            'username': username,
            'name': name,
            'password': password,
            'email': email
        }
        const registeredUser = await getUserData('/api/users/register', payload);
        if (registeredUser) {
            await clickLogin(e);
        }
    }*/

    const clickLogin = async (e) => {
        e.preventDefault();
        const payload = {
            'username': username,
            'password': password
        };
        const user = await getUserData('/login', payload);
/*        if (user.accessToken) {
            localStorage.setItem("user", JSON.stringify(user));
            setProfile(user);
            closeModal();
        }*/
    }
/*    const setProfile = (user) => {
        setUser(user);
    }*/
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
                        <div className='rememberContainer'>
                            <input id="rememberCheckbox" type='checkbox'></input>
                            <label id="checkboxLabel" htmlFor="rememberCheckbox">Remember me</label>
                        </div>
                        <button className='modalButton' type='submit' >Log In</button>
                    </form>

            </div>
        </div>

    );
}

export default LoginModal;