import { useState } from "react"

 const AddCategory = ({onSetAddCategory}) => {

    const [inputValue, setInputValue] = useState('');
    const inputChange = (event) =>{
        // para gregar valor nuevo dentro del input llamando directamente da donde se guarda el valor escrito
        setInputValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        // condicion que nos dice que si el input tiene un valor de menos de 3 caracter no recibir data
        if ( inputValue.trim().length <= 3 ) return;
        // 1) manera de realizar el cambio: onSetAddCategory( categories => [inputValue, ...categories] );
        onSetAddCategory( inputValue.trim() );
        //Avisa al input que al refrescar este en blanco
        setInputValue('');
    }


  return (
    <>
        <form onSubmit={ (event) => onSubmit(event) }>
            <input type="text" placeholder="Escribir aquí" value={inputValue} onChange={inputChange} />
        </form>
    </>
  )
}

export{
    AddCategory
}
