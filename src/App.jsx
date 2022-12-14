import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import Listar from './components/List'
import InitialPage from './components/InitialPage'
import TotalMoney from './components/TotalMoney';


export default function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [listTransactions, setlistTransactions] = useState([])
  const [transactionsGet, setTransactionsGet] = useState([])
  const [btnFilter, setBtnFilter] = useState('all')
  const [getData, setGetData] = useState({
    descr: '',
    type: 'entry',
    value: ''
  })


  function filterTrasaction(transaction) {
    const filtered = listTransactions.filter(
      elem => elem !== transaction
    )
    setlistTransactions(filtered)
    if (transactionsGet.length) {
      const attFiltered = transactionsGet.filter(
        elem => elem !== transaction
      )
      setTransactionsGet(attFiltered)
    }
  }

  function getAllList() {
    setTransactionsGet([])
    setBtnFilter('all')
  }

  function handleFilter(type) {
    const filterType = listTransactions.filter(
      elem => elem.type === type
    )
    setTransactionsGet(filterType)
    setBtnFilter(type)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (getData.descr === '') {
      toast.error('Adicione uma descrição');
    }
    else if (getData.value < 0 || getData.value === '') {
      toast.error('Valor não pode ser menor ou igual a zero');
    }
    else {
      const userTransaction = {
        descr: getData.descr,
        type: getData.type,
        value: getData.type === 'entry' ? Number(getData.value) : -Number(getData.value)
      }

      if (getData.type === 'entry') {
        toast.success(`O deposito de ${getData.descr} com o valor de R$ ${getData.value} foi depositado com sucesso !`);
      }
      else if (getData.type === 'spend') {
        toast.success(`A despesa de ${getData.descr} com o valor de R$ ${getData.value} foi feita com sucesso !`);
      }

      setlistTransactions([...listTransactions, userTransaction])

      setGetData({
        descr: '',
        type: 'entry',
        value: ''
      })
    }
  }


  return (
    <div className="App">

      {
        isAuth ? (
          <>
            <Header setIsAuth={setIsAuth} />
            <div className='dashboard'>
              <section className='sectionDash'>

                <div>
                  <Form

                    handleSubmit={handleSubmit}
                    setGetData={setGetData}
                    getData={getData}
                    listTransactions={listTransactions}

                  />

                  <TotalMoney
                    listTransactions={listTransactions}
                  />
                </div>
                <Listar
                  listTransactions={listTransactions}
                  filterTrasaction={filterTrasaction}
                  transactionsGet={transactionsGet}
                  btnFilter={btnFilter}
                  handleFilter={handleFilter}
                  getAllList={getAllList}
                />

              </section>
            </div>
          </>
        ) : (
          <InitialPage setIsAuth={setIsAuth} />
        )
      }

    </div>
  )
}


