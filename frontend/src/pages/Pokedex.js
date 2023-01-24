import PokemonListContainer from "../components/pokemonList/PokemonListContainer";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Pokedex() {
    return (
        <>
            <Header />
            <PokemonListContainer />
            <Footer />
        </>
    );
}

export default Pokedex;