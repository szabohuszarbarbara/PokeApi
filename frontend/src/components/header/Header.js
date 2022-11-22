import PokemonLogo from "../img/PokemonLogoLayered.png"
import "./Header.css"
import NavBar from "../navbar/NavBar";

function Header() {
    return (
        <>
            <div className={"header-container"}>
                <div className={"header-image"}><img src={PokemonLogo} alt=""/></div>
                <NavBar />
            </div>
        </>
    );
}

export default Header;