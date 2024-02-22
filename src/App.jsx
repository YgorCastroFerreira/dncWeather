import { useState } from 'react'
import Body1 from './Components/Body1/Body1'
import Footer from './Components/Footer/Footer'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import Previsao from './Components/Previsao/Previsao'
import ResultCEP from './Components/ResultCEP/ResultCEP'

import './app.scss'

function App() {
  const [local, setLocal] = useState([]);
  const [temp, setTemp] = useState([]);

  function handleLocal(location){
    let newlocal = [];

    newlocal.push(location);
    setLocal(newlocal);
  }

  function handleTemp(temperature){
    let newtemp = [];

    newtemp.push(temperature);
    setTemp(newtemp);
  }

  return (
    <div className='app'>
        <Header/>
        <Body1/>
        <Form onAddLocal={handleLocal} onAddTemp={handleTemp}/>
        <ResultCEP endereco = {local}/>
        <Previsao temperatura = {temp}/>
        <Footer/>
    </div>
  )
}

export default App
