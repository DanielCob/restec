"use client"

import { StyleClass } from 'primereact/styleclass';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Menubar } from 'primereact/menubar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
import { Card } from 'primereact/card';
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
            <Button label="Cerrar Sesión" severity="danger" icon="pi pi-sign-out"/>
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
                <Menubar model={items} start={start} end={end}/>
            </div>
            <div className="py-5 flex justify-content-center">
            <span className="text-900 text-4xl text-primary">Pedidos Activos</span>
            </div>
            <div className='flex flex-row flex-wrap justify-content-center gap-2'>
                <Card style={{ backgroundColor: 'var(--highlight-bg)', color: 'var(--highlight-text-color)', borderRadius: 'var(--border-radius)'}}>
                    <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="Ranking" header="ID"></Column>
                        <Column field="Nombre" header="Contenido"></Column>
                    </DataTable>
                </Card>
            </div>
        </PrimeReactProvider>
    );
}