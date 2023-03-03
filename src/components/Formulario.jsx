import React from 'react'
import styled from '@emotion/styled'
//Hooks
import useSelectMonedas from '../hooks/useSelectMonedas';

const InputSubmit = styled.input`
    background-color: #9497FF;
    color: #FFF;
    border: none;
    width: 100%;
    padding: 10px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease ;
    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`;

const Formulario = () => {
    const [SelectMonedas] = useSelectMonedas('Elige tu moneda');

  return (
    <div>
        <SelectMonedas></SelectMonedas>
        <InputSubmit type="submit" value="cotizar"/>
    </div>
  )
}

export default Formulario