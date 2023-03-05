import { ErrorBoundary } from 'react-error-boundary';
import { useState,useEffect } from 'react';
import styled from "@emotion/styled";

//Components
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

//Extra resources
import ImagenCripto from "./img/imagen-criptos.png"

const Imagen= styled.img`
  max-width : 400px;
  margin: 100px auto 0 auto;
  width: 80%;
  display: block;
`;

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media(min-width: 992px){
    display:grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`;

const Heading = styled.h1`
  font-family: 'Lato, sans-serif';
  color: #fff;
  text-align: center;
  font-weight: 700px;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content:'';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
    margin: 10px auto 0 auto
  }

`;

function App() {
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if(Object.keys(monedas).length > 0){
      const cotizarCripto = async()=>{
        setCargando(true);
        setResultado({})
        const{moneda, criptomoneda} = monedas;
        const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch (url);
        const resultado = await respuesta.json();

        setResultado(resultado.DISPLAY[criptomoneda][moneda]);
        setCargando(false);
      }
      cotizarCripto();
    }
  }, [monedas])

  return (
    <ErrorBoundary>
      <Contenedor>
        <Imagen src={ImagenCripto} alt='Imagen Cripto'></Imagen>
        <div>
          <Heading>Cotiza Criptomonedas al Instante</Heading>
          <Formulario setMonedas={setMonedas} ></Formulario>
          {cargando && <Spinner/>}
          {resultado.PRICE && <Resultado resultado={resultado}/>}
        </div> 
      </Contenedor>
    </ErrorBoundary>
  )
}

export default App
