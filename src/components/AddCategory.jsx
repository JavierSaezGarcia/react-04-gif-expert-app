import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {    // target es la desestructuracion de event
    setInputValue(event.target.value);
  }

  const onSubmit = (event) => {

    event.preventDefault(); // evito la recarga del navegador por el submit
    if (inputValue.trim().length <= 1) return;   // si hay menos de dos caracteres no hago nada
    
    onNewCategory(inputValue.trim()); // Le paso del hijo que es addCategory el valor al la funcion del padre onAddCategory
    setInputValue(''); // Vacío el set del useState

  }
  return (
    
    <div className="col-xs-12 col-md-4">

      <form onSubmit={onSubmit}>
        <div className="input-group input-group-md mb-3">
          <input type="text"
            className="form-control"
            placeholder="Search Gifs"
            value={inputValue}
            onChange={onInputChange} />
          <button className="btn btn-primary" type="submit" onClick={onSubmit}>Search</button>
        </div>
      </form>

    </div>

  )
}
