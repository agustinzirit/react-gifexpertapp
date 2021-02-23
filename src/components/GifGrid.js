import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ categoria }) => {

  const {data:Imagenes, loading} = useFetchGifs(categoria);

  return (
    <>
      <h3> {categoria} </h3>
      {loading && <p> Loading... </p>}
      <div className="card-grid">
        {Imagenes.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
}
