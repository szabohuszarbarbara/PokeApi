import PokemonLogo from "../img/PokemonLogoLayered.png"
import "./Header.css"

function Header() {
    return (
        <>
            <div className={"header-container"}>
                <div className={"header-image"}><img src={PokemonLogo} alt=""/></div>
            </div>
        </>
    );
}

export default Header;