import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './img/freecodecamplogo.png'
import { useState } from 'react';

function App() {

  const [numClics, setnumClics] = useState(0);

  

  const manejarClic = ()=>{
    setnumClics(numClics + 1)
  }
  const reiniciarContador = () =>{
    setnumClics(0)
  }
  return (
    
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img className='freecodecamp-logo'
        src={freeCodeCampLogo} 
        alt='Logo de freecodecamp'/>
      </div>
      <div className='container-principal'>
          <Contador 
          numClics={numClics}
          />
          <Boton 
          texto='Clic'
          esBotonClic={true}
          manejarClic={manejarClic}
          />
          <Boton 
          texto='Reiniciar'
          esBotonClic={false}
          manejarClic={reiniciarContador}
          />
      </div>
    </div>
  );
}

export default App;
