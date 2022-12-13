import illustration from "../../assets/illustration.svg"
import logoLight from '../../assets/NuKenzieLigth.svg'
import "./stlye.css"

function InitialPage({ setIsAuth }) {
    return (
        <div className='initialPage'>
            <div className='initialPage--container'>
                <section className='initialPage--section'>
                    <img src={logoLight} alt="NuKenzie" />
                    <h1 className='initialPage--title'>
                        Centralize o controle das suas finanças
                    </h1>
                    <p>de forma rápida e segura</p>
                    <button className='btnB' onClick={() => setIsAuth(true)}>
                        Iniciar
                    </button>
                </section>
                <section className="ilustration">
                    <img src={illustration} alt='Exemplo da dashboard com uma lista de cartões' />
                </section>
            </div>
        </div>
    );
}

export default InitialPage;