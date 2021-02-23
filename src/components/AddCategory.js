import React, { useState } from 'react'

import { PropTypes } from "prop-types";

export const AddCategory = ({ setCategoria }) => {

  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategoria((categorias) => [inputValue, ...categorias]);
      setInputValue("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputValue} />
    </form>
  );
}

AddCategory.prototype = {
  setCategoria: PropTypes.func.isRequired
}
