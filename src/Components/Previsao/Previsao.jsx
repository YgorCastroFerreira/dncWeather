import React from 'react'
import './index.scss'

import cloud from '../../icons/clouds.svg'

const Previsao = ({temperatura}) => {
  return (
    <div className='previsao'>
        <section className='previsao__secao1'>
            <h1>Previsão do tempo na região:</h1>
            <img src={cloud}></img>
        </section>
        <section className='previsao__secao2'>
              {temperatura.map((temp, index)=>(
                 <p key={index}>Previsão do tempo de acordo com a região: {temp.current.temperature_2m} {temp.hourly_units.temperature_2m}</p>
              ))}
        </section>
    </div>
  )
}

export default Previsao