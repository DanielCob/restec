"use client"

import { StyleClass } from 'primereact/styleclass';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Menubar } from 'primereact/menubar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
import { Tag } from 'primereact/tag';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import React, { useState } from "react";

export default function Home({ Component, pageProps }) {

    const value = {
        ripple: true
    };

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

    const [products, setProducts] = useState([
        { id: 1, code: 'P001', name: 'Product 1', inventoryStatus: 'INSTOCK', price: 10.99 },
        { id: 2, code: 'P002', name: 'Product 2', inventoryStatus: 'LOWSTOCK', price: 19.99 },
        { id: 3, code: 'P003', name: 'Product 3', inventoryStatus: 'OUTOFSTOCK', price: 5.99 },
        { id: 4, code: 'P004', name: 'Product 4', inventoryStatus: 'INSTOCK', price: 15.99 },
        { id: 5, code: 'P005', name: 'Product 5', inventoryStatus: 'LOWSTOCK', price: 12.99 },
        { id: 6, code: 'P006', name: 'Product 6', inventoryStatus: 'OUTOFSTOCK', price: 8.99 },
    ]);
    const [statuses] = useState(['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK']);
    
    const getSeverity = (value) => {
        switch (value) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const onRowEditComplete = (e) => {
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData;

        setProducts(_products);
    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };
    
    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData.inventoryStatus)}></Tag>;
    };

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    };

    const allowEdit = (rowData) => {
        return rowData.name !== 'Blue Band';
    };

    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <Tag value={option} severity={getSeverity(option)}></Tag>;
                }}
            />
        );
    };

    
    return (
        <PrimeReactProvider value={value}>
            <div>
                <Menubar model={items} start={start} end={end}/>
            </div>
            <div>
                <div className="card p-fluid">
                    <DataTable value={products} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
                        <Column rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                    </DataTable>
                </div>
            </div>
        </PrimeReactProvider>
    );
}