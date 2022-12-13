import { ToastContainer } from 'react-toastify';
import './stlye.css';

function Form({ handleSubmit, setGetData, getData }) {
    return (
        <div className='form--container'>
            <form onSubmit={handleSubmit}>
                <section>
                    <label>Descrição</label>
                    <input
                        type='text'
                        placeholder='Digite aqui sua descrição'
                        value={getData.descr}
                        onChange={(event) => setGetData({ ...getData, descr: event.target.value })}
                    />
                    <span className='spanText'>Ex: Compra de roupas</span>
                </section>
                <section className='value--section'>
                    <div className='value--input'>
                        <label>Valor</label>
                        <input
                            type='number'
                            placeholder='Valor'
                            value={getData.value}
                            onChange={(event) => setGetData({ ...getData, value: event.target.value })}
                        />
                    </div>
                    <div className='value--select'>
                        <label>Tipo de valor</label>
                        <select
                            placeholder='Selecione'
                            value={getData.type}
                            onChange={(event) => setGetData({ ...getData, type: event.target.value })}
                        >
                            <option value='entry'>Entrada</option>
                            <option value='spend'>Despesa</option>
                        </select>
                    </div>
                </section>
                <button className='btnB'>Inserir valor</button>
                <ToastContainer />
            </form>
        </div>
    )
}

export default Form