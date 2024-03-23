"use client"
import React, { useState } from "react";
import { Button } from "primereact/button";
import { useRouter } from 'next/navigation';

export default function Home({ Component, pageProps }) {
  const [source, setSource] = useState([
    { id: 1, name: 'Arroz con pollo', status: 'tomar pedido' },
    { id: 2, name: 'Pollo Frito', status: 'tomar pedido' },
    { id: 3, name: 'Chifrijo', status: 'tomar pedido' }
  ]);

  const router = useRouter()

  const onClick = (id) => {
    // Cambiar el estado del pedido o eliminarlo
    const updatedSource = source.map(item => {
      if (item.id === id) {
        if (item.status === 'tomar pedido') {
          // Si el estado es 'tomar pedido', cambiarlo a 'confirmar'
          return { ...item, status: 'confirmar' };
        } else {
          // Si el estado es 'confirmar', eliminar la fila
          return null;
        }
      }
      return item;
    }).filter(Boolean); // Filtrar los elementos nulos (filas eliminadas)
    setSource(updatedSource);
  };

  const buttonLabel = (status) => {
    return status === 'tomar pedido' ? 'Tomar pedido' : 'Confirmar';
  };

  const volver = () => {
    // Acción asociada al botón "Volver"
    console.log('Volver');
  };

  return (
    <div className="container">
      <div className="header">
        <div className="header-item">Pedidos</div>
        <div className="header-item">TomarPedido</div>
      </div>
      {source.map(item => (
        <div className="product-item" key={item.id}>
          <div className="product-name">{item.name}</div>
          <div className="product-actions">
            <Button label={buttonLabel(item.status)} className="p-button-primary" onClick={() => onClick(item.id)} />
          </div>
        </div>
      ))}
      <Button label="Volver" className="p-button-secondary volver-btn" onClick={() => router.push('/chef/root')} />
      <style jsx>{`
        .container {
          margin-top: 20px;
          position: relative;
        }
        .header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          font-weight: bold;
          text-align: center;
          margin-bottom: 10px;
        }
        .header-item {
          padding: 5px;
        }
        .product-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid #ccc;
          align-items: center;
          padding: 10px 0;
          text-align: center;
        }
        .product-name, .product-actions {
          padding: 5px;
        }
        .volver-btn {
          position: absolute;
          bottom: 10px;
          left: 10px;
        }
      `}</style>
    </div>
  );
}
