import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifDos } from './GifDos';

export const Gif = ({ Bills }) => {

    const { data:Pappa, cargando } = useFetchGifs( Bills );

    return (
        <>
            <h3> { Bills } </h3>

            { cargando && <p>cargando</p> }

            <div className="card-grid">
                
                {
                    Pappa.map( img => (
                        <GifDos 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            
            </div>
        </>
    )
}
