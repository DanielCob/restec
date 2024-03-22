"use client";
import React, { useState } from "react";
import { PickList } from 'primereact/picklist';
import { Button } from "primereact/button";

export default function Home({ Component, pageProps }) {
  const [source, setSource] = useState([
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    {id: 3, name: 'Item 3'}
  ]);

  const [target, setTarget] = useState([]);

  const onChange = (event) => {
    // Update target and source arrays based on event
    setSource(event.source);
    setTarget(event.target);
  };

  const itemTemplate = (item) => {
    // Custom template for each item
    return (
      <div>{item.name}</div>
    );
  };

  return (
    <div className="flex justify-content-center align-items-end">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Seleccione los pedidos a preparar</div>
        </div>
        <PickList dataKey="id" source={source} target={target} onChange={onChange} itemTemplate={itemTemplate} filter filterBy="name" breakpoint="1280px"
          sourceHeader="Available" targetHeader="Selected" sourceStyle={{ height: '24rem' }} targetStyle={{ height: '24rem' }}
          sourceFilterPlaceholder="Buscar" targetFilterPlaceholder="Buscar" />

        <div>
          <Button label="Tomar pedidos" icon="pi-arrow-right" className="w-full mt-6" />
        </div>
      </div>
    </div>
  );
}
