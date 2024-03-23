"use client"
import React, { useState } from "react";
import { Button } from "primereact/button";

export default function Home({ Component, pageProps }) {
  const [source, setSource] = useState([
    { id: 1, name: 'Arroz con pollo', time: '5 min', completed: false },
    { id: 2, name: 'Pollo frito', time: '10 min', completed: false },
    { id: 3, name: 'Chifrijo', time: '15 min', completed: false }
  ]);

  const onClick = (id) => {
    // Marcar un producto como completado o eliminarlo
    const updatedSource = source.map(item => {
      if (item.id === id) {
        if (item.completed) {
          // Si ya está completado, eliminar la fila
          return null;
        } else {
          // Si no está completado, cambiar el estado a completado
          return { ...item, completed: true };
        }
      }
      return item;
    }).filter(Boolean); // Filtrar los elementos nulos (filas eliminadas)
    setSource(updatedSource);
  };

  const buttonLabel = (completed) => {
    return completed ? 'Eliminar registro' : 'Listo';
  };

  const buttonClassName = (completed) => {
    return completed ? 'p-button-danger' : '';
  };

  return (
    <div className="container">
      <div className="header">
        <div className="header-item">Producto</div>
        <div className="header-item">Tiempo estimado</div>
        <div className="header-item">Producto completado</div>
      </div>
      {source.map(item => (
        <div className="product-item" key={item.id}>
          <div className="product-name">{item.name}</div>
          <div className="product-time">{item.time}</div>
          <Button label={buttonLabel(item.completed)} className={buttonClassName(item.completed)} onClick={() => onClick(item.id)} />
        </div>
      ))}
      <div className="return-button">
        <Button label="Volver" className="p-button-secondary p-button-text" />
      </div>
      <style jsx>{`
        .container {
          margin-top: 20px;
          position: relative;
        }
        .header {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          font-weight: bold;
          text-align: center;
          margin-bottom: 10px;
        }
        .header-item {
          padding: 5px;
        }
        .product-item {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          border-bottom: 1px solid #ccc;
          align-items: center;
          padding: 10px 0;
          text-align: center;
        }
        .product-name, .product-time {
          padding: 5px;
        }
        .return-button {
          position: fixed;
          bottom: 10px;
          left: 10px;
        }
      `}</style>
    </div>
  );
}
