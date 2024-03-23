"use client"

import { StyleClass } from 'primereact/styleclass';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Menubar } from 'primereact/menubar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import React, { useState } from "react";

export default function Home({ Component, pageProps }) {
    // Configuracion de PrimeReact
    const value = {
        ripple: true
    };

    // Configuracion del menubar
    const items = [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            url: '/admin/inicio'
        },
        {
            label: 'Reportes',
            icon: 'pi pi-briefcase',
            url: '/admin/reportes'
        },
        {
            label: 'Gestión',
            icon: 'pi pi-user',
            items: [
                {
                    label: 'Tipos de Platos',
                    icon: 'pi pi-tag',
                    url: '/admin/gestion/tipos-de-platos'
                },
                {
                    label: 'Menu',
                    icon: 'pi pi-list',
                    url: '/admin/gestion/menu'
                }
            ]
        },
    ];

    const start = <span className="text-3xl text-primary">ResTEC</span>
    
    const end = (
        <div className="flex align-items-center gap-2">
            <Button label="Cerrar Sesión" severity="danger" icon="pi pi-sign-out" text />
        </div>
    );

    // Configuracion de la tabla
    const header = (
        <div className="flex flex-row flex-wrap justify-content-between">
            <div className="flex justify-items-start align-items-center gap-2">
                <span className="text-xl text-900 font-bold">Tipos de Platos</span>
            </div>
            <div className="flex justify-items-end align-items-center gap-2">
                <Button icon="pi pi-refresh" rounded raised />
                <Button icon="pi pi-plus" severity="success" rounded raised />
            </div>
        </div>
    );

    const [products, setProducts] = useState([
        { name: 'Product 1', description: 'Description 1' },
        { name: 'Product 2', description: 'Description 2' },
        { name: 'Product 3', description: 'Description 3' },
        { name: 'Product 4', description: 'Description 4' },
        { name: 'Product 5', description: 'Description 5' },
        { name: 'Product 6', description: 'Description 6' },
        { name: 'Product 7', description: 'Description 7' },
        { name: 'Product 8', description: 'Description 8' },
        { name: 'Product 9', description: 'Description 9' },
        { name: 'Product 10', description: 'Description 10' }
    ]);
    const [selectedProducts, setSelectedProducts] = useState(null);
    
    const onRowEditComplete = (e) => {
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData;

        setProducts(_products);
    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const allowEdit = (rowData) => {
        return rowData.name !== 'Blue Band';
    };


    return (
        <PrimeReactProvider value={value}>
            <div>
                <Menubar model={items} start={start} end={end}/>
            </div>
            <div>
                <div className="card p-fluid">
                    <DataTable value={products} header={header} selectionMode={'checkbox'} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} editMode="row" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '50rem' }}>
                        <Column selectionMode="multiple" headerStyle={{ width: '3rem', textAlign: 'start' }}></Column>
                        <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '40%' }}></Column>
                        <Column field="description" header="Descripción" editor={(options) => textEditor(options)} style={{ width: '50%' }}></Column>
                        <Column rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'end' }}></Column>
                    </DataTable>
                </div>
            </div>
        </PrimeReactProvider>
    );
}