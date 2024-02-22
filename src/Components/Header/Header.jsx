import React from 'react'
import './index.scss'

const Header = () => {
  return (
    <header className='Header'>
        <div className='Header__appName'>
            <p>DncWeather</p>
        </div>
        <div className='Header__menu'>
            <ul>
              <li>Endereços</li>
              <li>Previsão do Tempo</li>
            </ul>
        </div>

    </header>
  )
}

export default Header