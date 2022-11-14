import PokemonLogo from "../img/PokemonLogoLayered.png"
import "./Header.css"
import SearchPokemon from "./SearchPokemon";

function Header() {
    return (
        <>
            <div className={"header-container"}>
                <div className={"header-image"}><img src={PokemonLogo} alt=""/></div>
                <SearchPokemon />
            </div>
        </>
    );
}

export default Header;