import React from "react";
import { useState } from "react";
// Se importo de esta manera gracias al archivo barril 'js', solo se hace un llamado a la carpeta y react entiende que hay un archivo index del cual realizar las importaciones
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
    // los hooks de react mantienen el estado del mismo
    const [categories, setCategories] = useState([
        'Naruto'
    ]);

    const onAddCategory = ( newCategory ) => {
        // Dice que si en la categoria nueva se implementa o escribe una ya existente no se enviara
        if ( categories.includes(newCategory) ) return;

        // manera de agregar un nuevo string
        setCategories([ newCategory, ...categories  ]);
    }

    return (
        <>
            <h1>Listado de Gifs</h1>
            {/*una manera de realizar cambios en el input: <AddCategory setAddCategory= {setCategories} /> */}
            <AddCategory onSetAddCategory = { (event) => onAddCategory(event) }  />
            {
                categories.map( (category) => (
                    // Se agrega el atributo key para eliminar error en consola, ya que debe ser unico
                        <GifGrid key={category} category={category} />
                    ))
            }
        </>
    )
}

export {
    GifExpertApp
}