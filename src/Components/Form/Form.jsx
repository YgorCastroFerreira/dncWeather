import React from 'react'
import './index.scss'
import {useState} from 'react'

const Form = ({onAddLocal, onAddTemp}) => {

  const [cep, setCep] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const handleChange = (event) => {
    setCep(event.target.value.replace(/\D/g,''));
    console.log(cep);
  }
  const handleLat = (event) =>{
    setLat(event.target.value);
    console.log(lat);
  }
  const handleLon = (event) =>{
    setLon(event.target.value);
    console.log(lon);
  }

  async function buttonClick(){
    console.log(cep);
    if(cep.length !== 8){
        alert('CEP Inválido');
        return;
      }
    await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data=>{
      console.log(data);
      onAddLocal(data);
    })
    await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lat}&current=temperature_2m&hourly=temperature_2m&timezone=America%2FSao_Paulo&forecast_days=1`).then(res => res.json()).then(data=>{
      console.log(data);
      onAddTemp(data)
    })
    
      return handleChange, handleLat, handleLon;
  }
 
  return (
    <div className='form'>
        <form className='form__form'>
            <label htmlFor="fname">Primeiro nome:</label><br/>
            <input type="text" name="fname" placeholder="Insira seu primeiro nome"/><br/><br/>

            <label htmlFor="lname">E-mail:</label><br/>
            <input type="text" name="email" placeholder="Insira seu e-mail"></input><br/><br/>

            <label htmlFor="lname">CEP:</label><br/>
            <input type="text" id='cep' name="cep" onInputCapture={handleChange} placeholder="Insira seu CEP"/><br/><br/>

            <label htmlFor="lname">Digite e latitude e longitude para saber a previsão:</label><br/>
            <input type="text" name="lat" onInputCapture={handleLat} className='form__gps' placeholder="Latitude"/>
            <input type="text" name="long" onInputCapture={handleLon} className='form__gps' placeholder="Longitude"/><br/><br/>

            {/* <input type="submit" className='form___botao' onClick={handleChange}  value="Acessar"/> */}
        </form>
        <div className='form__divbotao'>
            <button className='form___botao' onClick={buttonClick}>Acessar</button>
        </div>
        
        
    </div>
  )
}

export default Form