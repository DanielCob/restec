"use client"

import { StyleClass } from 'primereact/styleclass';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Menubar } from 'primereact/menubar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { useRouter } from 'next/navigation';
import React, { useState } from "react";

export default function Home({ Component, pageProps }) {

    // Configuracion de PrimeReact
    const value = {
        ripple: true
    };

    const router = useRouter()

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
            <Button label="Cerrar Sesión" severity="danger" icon="pi pi-sign-out" onClick={() => router.push('/admin/login')}/>
        </div>
    );
    
    // Configuracion de la tabla
    const header = (
        <div className="flex flex-row flex-wrap justify-content-between">
            <div className="flex justify-items-start align-items-center gap-2">
                <span className="text-xl text-900 font-bold">Menú</span>
            </div>
            <div className="flex justify-items-end align-items-center gap-2">
                <Button icon="pi pi-refresh" rounded raised />
                <Button icon="pi pi-plus" severity="success" rounded raised />
            </div>
        </div>
    );
    
    const [products, setProducts] = useState([
        { name: 'Arroz con Pollo', price: 5000, calorie: 500, type: 'Plato Fuerte' },
        { name: 'Ceviche', price: 6000, calorie: 600, type: 'Entrada' },
        { name: 'Tres Leches', price: 3000, calorie: 300, type: 'Postre' },
        { name: 'Blue Band', price: 2000, calorie: 200, type: 'Bebida' }
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

    const calorieEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="decimal" minFractionDigits={0} maxFractionDigits={2}/>;
    };

    const calorieBodyTemplate = (rowData) => {
        return rowData.calorie + ' cal';
    };
    
    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="CRC" locale="de-DE" />;
    };

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'CRC' }).format(rowData.price);
    };

    // Render
    return (
        <PrimeReactProvider value={value}>
            <div>
                <Menubar model={items} start={start} end={end}/>
            </div>
            <div>
                <div className="card p-fluid">
                    <DataTable value={products} header={header} selectionMode={'checkbox'} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} editMode="row" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '50rem' }}>
                        <Column selectionMode="multiple" headerStyle={{ width: '3rem', textAlign: 'start' }}></Column>
                        <Column field="name" header="Nombre" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="price" header="Precio" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="calorie" header="Cantidad de Calorías" body={calorieBodyTemplate} editor={(options) => calorieEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="type" header="Tipo" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column rowEditor={true} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                    </DataTable>
                </div>
            </div>
        </PrimeReactProvider>
    );
}