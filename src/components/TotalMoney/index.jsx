import "./stlye.css";

function TotalMoney({ listTransactions }) {

    const valorTotal = listTransactions.reduce((acumulador, valorAtual) => {
        return valorAtual.value + acumulador;
    }, 0)
    return (
        <div className='total--container'>
            <div>
                <h3>Valor total:</h3>
                <span id='totalValue'>R$ {valorTotal.toFixed(2)}</span>
            </div>
            <span className='spanText'>O valor se refere ao saldo</span>
        </div>
    )

}

export default TotalMoney;



