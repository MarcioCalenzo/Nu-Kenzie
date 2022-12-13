import NoCard from "../../assets/NoCard.svg";
import Card from "../Card/index";
import "./stlye.css";

function Listar({
    listTransactions,
    filterTrasaction,
    transactionsGet,
    btnFilter,
    handleFilter,
    getAllList
}) {

    const listRender =
        btnFilter == 'all' ? listTransactions : transactionsGet;

    return (
        <div className='list'>
            <div className='filter--div'>
                <h3>Resumo financeiro</h3>
                <div className="mobile--filter--div">
                    <button
                        onClick={() => getAllList()}
                        disabled={btnFilter === 'all' ? true : false}
                        className='button--header--filter'>
                        Todos
                    </button>

                    <button
                        onClick={() => handleFilter('entry')}
                        disabled={btnFilter === 'entry' ? true : false}
                        className='button--header--filter'>
                        Entradas
                    </button>

                    <button
                        onClick={() => handleFilter('spend')}
                        disabled={btnFilter === 'spend' ? true : false}
                        className='button--header--filter'>
                        Despesas
                    </button>
                </div>

            </div>
            {
                listRender.length ? (
                    listRender.map((elem, index) => (
                        <Card
                            key={index}
                            transaction={elem}
                            filterTrasaction={filterTrasaction}
                        />
                    ))
                )
                    :
                    (
                        <>
                            <h2>
                                Você ainda não possui nenhum lançamento
                            </h2>
                            <img src={NoCard} className='noCard' alt='Sem lista de transação' />
                            <img src={NoCard} className='noCard' alt='' />
                        </>
                    )
            }
        </div>
    );
}

export default Listar;