"use client"

import { StyleClass } from 'primereact/styleclass';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Menubar } from 'primereact/menubar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
import React, { useState } from "react";

export default function Home({ Component, pageProps }) {

    const value = {
        ripple: true
    };

    const items = [
        {
            label: 'Reportes',
            icon: 'pi pi-home'
        },
        {
            label: 'Gestión',
            icon: 'pi pi-user',
            items: [
                {
                    label: 'Platos',
                    icon: 'pi pi-tag'
                },
                {
                    label: 'Menu',
                    icon: 'pi pi-list'
                }
            ]
        },

    ];

    const end = (
        <div className="flex align-items-center gap-2">
            <Button label="Cerrar Sesión" severity="danger" icon="pi pi-sign-out" text />
        </div>
    );

    const products = [
        {Ranking: 1, Nombre: 'Plato 1'},
        {Ranking: 2, Nombre: 'Plato 2'},
        {Ranking: 3, Nombre: 'Plato 3'},
        {Ranking: 4, Nombre: 'Plato 4'},
        {Ranking: 5, Nombre: 'Plato 5'},
        {Ranking: 6, Nombre: 'Plato 6'},
        {Ranking: 7, Nombre: 'Plato 7'},
        {Ranking: 8, Nombre: 'Plato 8'},
        {Ranking: 9, Nombre: 'Plato 9'},
        {Ranking: 10, Nombre: 'Plato 10'}
    ];
    
    return (
        <PrimeReactProvider value={value}>
            <div>
                <Menubar model={items} end={end}/>
            </div>
            <h1>Reportes</h1>
            <div className='flex flex-row flex-wrap gap-3'>
                <div className="flex-1 surface-card shadow-2 border-round">
                <h2>Top platos más vendidos</h2>
                    <div className="card">
                        <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                            <Column field="Ranking" header="Ranking"></Column>
                            <Column field="Nombre" header="Nombre"></Column>
                        </DataTable>
                    </div>
                </div>
                <div className="flex-1">
                <h2>Platos que más ganancias generan</h2>
                    <div className="card">
                        <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                            <Column field="Ranking" header="Ranking"></Column>
                            <Column field="Nombre" header="Nombre"></Column>
                        </DataTable>
                    </div>
                </div>
                <div className="flex-1">
                <h2>Platos con mejor feedback</h2>
                    <div className="card">
                        <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                            <Column field="Ranking" header="Ranking"></Column>
                            <Column field="Nombre" header="Nombre"></Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        </PrimeReactProvider>
    );
}