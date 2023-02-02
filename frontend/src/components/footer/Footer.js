import "./Footer.css"
import Pikachu from"../img/pikachu.png";

function Footer() {
    return (
        <div className="footer">
            <div className="image-container"><img src={Pikachu} alt=""/></div>
            <div className={"footer-text"} >@szabohuszarbarbara 2023</div>

        </div>
    );
}

export default Footer;