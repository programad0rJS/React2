import React, { useState } from 'react'


export const BuscadorDeGif = ({ lentes }) => {

    const [Piero, Coque] = useState(''); 

    const Linux = (e) => {
        Coque(e.target.value);
    }

    const Josue = (e) => {
        e.preventDefault();

        if (Piero) {
            lentes(PvP => [Piero, PvP,]);
            Coque('');
        }
         {/* QUE ES TRIM PARA MAS INFO https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
        
          Resumen
          El método trim( ) elimina los espacios en blanco en ambos extremos del string.
          Los espacios en blanco en este contexto, son todos los caracteres sin contenido 
          (espacio, tabulación, etc.) 
          y todos los caracteres de nuevas lineas (LF,CR,etc.).

        */}
    }

    return (
        <>
     
          <center>
          <header className="header">
                {/* PUEDE SER GIF O IMG */}
                <form className="barra-busqueda" onSubmit={Josue}>
                    <input type="text" placeholder="Buscador"

                        type="text"
                        value={Piero}
                        onChange={Linux}
                    />
                </form>
            </header>
          </center>
        </>
    )
}