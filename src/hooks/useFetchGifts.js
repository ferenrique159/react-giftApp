import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifts = ( category ) => {
  // react cuando lee el return de 'images', entiende que es un arreglo vacio al iniciarse pero al llegar al setImages entiende que hay nuevas imagenes y manda a renderizar todo el componente y es cuando aparecen las imagenes del buscador
    const [images, setimages] = useState([])
    const [isLoading, setLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setimages(newImages);
        // luego de que cargue todas las imagenes cambia el status del loading a false
        setLoading(false);
    }

    //Este hook es un efecto al codigo que le hace entender que cree el argumento una vez ypor eso el sugundo argumento se mantiene en blanco
    useEffect(() => {
        getImages();
    }, [])
  
    return {
        // A partir de ESC6 si una propiedad a punta a una variable con el mismo nombre se puede simplifucar asi
        images,
        isLoading
    }
}

export {
    useFetchGifts
}
