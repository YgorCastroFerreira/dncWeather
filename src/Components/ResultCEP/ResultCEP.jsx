import React from 'react'
import './index.scss'
import place from '../../icons/local.svg'

const ResultCEP = ({endereco}) => {

  
  return (
    
    <div className = 'resultcep'>
        <div className = 'resultcep__title'>
            <h1>Resultado da busca por CEP:</h1>
            <img src={place}></img>
        </div>
        <div>
            <section className = 'resultcep__above'>
              <ul className = 'resultcep__list1'>
                <li>Logradouro</li>
                <li>Bairro/Distrito</li>
                <li>Localidade/UF</li>
              </ul>
            </section>
            <section className = 'resultcep__below'>
                {endereco.map((cep, index)=>(
                  <ul className = 'resultcep__list2'>
                    <li key={index}>{cep.logradouro}</li>
                    <li key={index}>{cep.bairro}</li>
                    <li key={index}>{cep.uf}</li>
                  </ul>
                  ))}
            </section>
        </div>
        
    </div>
  )
}

export default ResultCEP