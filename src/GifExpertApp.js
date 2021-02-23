import React, { useState } from "react";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categorias, setCategoria] = useState(["Samurai X"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategoria={ setCategoria }/>
      <hr />

      {
        categorias.map((categoria) =>
          <GifGrid key={categoria} categoria={categoria}/>
        )
      }

    </>
  );
}
