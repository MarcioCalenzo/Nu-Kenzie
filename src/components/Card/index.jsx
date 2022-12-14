import "./stlye.css"
import { FiTrash2 } from 'react-icons/fi'

export default function Card({ transaction, filterTrasaction }) {
    if (transaction.type === 'entry') {
        return (
            <div className='card entryCard'>
                <div>
                    <h3>{transaction.descr}</h3>
                    <p>R$ {transaction.value.toFixed(2)}</p>
                    <button
                        className='btnR'
                        onClick={() => filterTrasaction(transaction)}
                    >
                        <FiTrash2 />
                    </button>
                </div>
                <span className='spanText'>Entradas</span>
            </div>
        );
    }
    if (transaction.type === 'spend') {
        return (
            <div className='card spendCard'>
                <div>
                    <h3>{transaction.descr}</h3>
                    <p>R$ {transaction.value.toFixed(2)}</p>
                    <button
                        className='btnR'
                        onClick={() => filterTrasaction(transaction)}
                    >
                        <FiTrash2 />
                    </button>
                </div>
                <span className='spanText'>Despesas</span>
            </div>
        );
    }
}