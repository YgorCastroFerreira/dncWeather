import './index.scss'
import sunCloud from '../../icons/sun-cloud.svg'

import React from 'react'

const Body1 = () => {
  return (
    <div className='body1'>
        <h1>
            Descubra Mais com Precisão: <br/>
            Previsões do Tempo e endereços <br/>
            em tempo real.
        </h1>
        <img src={sunCloud}></img>
    </div>
  )
}

export default Body1