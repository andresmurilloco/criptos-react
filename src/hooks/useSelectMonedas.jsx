import React from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
    color:#FFF;
`

const useSelectMonedas = (label, opciones) => {
    const SelectMonedas=()=>{
        return(
        <>
            <Label>{label}</Label>
            <select>
                <option>Seleccione una moneda</option>
                {opciones.map(opcion=>(
                    <option value={opcion.id} key={opcion.id}>
                        {opcion.nombre}
                    </option>
                ))}
            </select>
        </>);
    }
    return [SelectMonedas];
}

export default useSelectMonedas