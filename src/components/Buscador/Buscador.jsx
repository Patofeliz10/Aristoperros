import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Buscador = (props) => {
    const [busqueda, setBusqueda] = useState("")
    function handleChange (event) {
        setBusqueda (event.target.value)
    }

    return (
        <div>
            <TextField id="standard-basic" label="Standard" variant="standard" onChange = {handleChange}/>
            <Button variant="outlined" onClick={ () => props.getData (busqueda) } >Buscar Perro</Button>
        </div>
    )
}

export default Buscador
