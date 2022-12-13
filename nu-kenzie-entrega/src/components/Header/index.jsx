import logoDark from "../../assets/NuKenzieDark.svg";
import "./stlye.css";

function Header({ setIsAuth }) {
    return (
        <div className="header--container">
            <nav>
                <img src={logoDark} alt="Logo NuKenzie" />
                <button className="button--header--filter" onClick={() => setIsAuth(false)}>
                    Início
                </button>
            </nav>
        </div>
    );
}

export default Header;