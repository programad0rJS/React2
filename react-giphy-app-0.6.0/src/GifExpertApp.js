import React, { useState } from 'react'
import { BuscadorDeGif } from './components/BuscadorDeGif';
import { Gif } from './components/Gif';
import BarraLateral from './components/BarraLateral';

export const GifExpertApp = () => {
    
    const [Fazt, lentes] = useState([]);

    return (
        <>
            <BarraLateral></BarraLateral>
            <br />
            <br />
            <br />
            <br />
            <br /><br /> <br />
            <center><h2>Buscador Img O Gif</h2></center>
            <BuscadorDeGif lentes={ lentes } />
            <hr />

           
                {
                    Fazt.map( Bills  => (
                        <Gif 
                            key={ Bills }
                            Bills={ Bills }
                        />
                    ))
                }
        
     
        </>
    )
}
