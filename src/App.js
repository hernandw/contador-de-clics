import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './img/freecodecamplogo.png'

function App() {
  const manejarClic = ()=>{
    console.log('Clic')
  }
  const reiniciarContador = () =>{
    console.log('Reiniciar')
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
          numClics='5'
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
