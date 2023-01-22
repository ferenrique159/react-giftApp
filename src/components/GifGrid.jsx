import { useEffect, useState } from "react";
import { useFetchGifts } from "../hooks/useFetchGifts";
import { GifGridItem } from "./GifGridItem";

const GifGrid = ({ category }) => {

    // hooks personalizado
    const { images, isLoading } = useFetchGifts(category);

    return (
       <>
            <h3>{ category }</h3>
            {/* Condicion ternaria es con '?' esta es una condicion && 'AND' que si es true muestra sino null (menos codigo) */}
            {
                isLoading && ( <h1>Cargando...</h1> )
            }
            <div className="card-grid">
                {// desestructuracion del objeto para poder llamar en particular el objeto que deseamos mostrar
                    images.map( (image) => (
                        <GifGridItem key={image.id} image={image} { ...image }  />
                    ))
                    // el atributo de react '{...images}' significa que estamos llamando todos los componentes u objetos internos de images, con la finalidad de que cualquier objeto que llamemos desde el otro componente pueda ser obtenido para asi crear menos lineas de codigos
                }
            </div>
       </>
    )
}

export {
    GifGrid
}
