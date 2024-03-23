"use client";
import "primeflex/primeflex.css";
import { StyleClass } from 'primereact/styleclass';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Button } from "primereact/button";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";

export default function Home({ Component, pageProps }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()

  const value = {
    ripple: true
  };

  return (
    <PrimeReactProvider value={value}>
        <div className="flex justify-content-center align-items-end">
          <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div className="text-center mb-5">
                  <div className="text-900 text-3xl font-medium mb-3">Seleccione una opción</div>
            </div>
            <div>
              <Button label="Tomar pedidos" icon="pi-arrow-right" className="w-full mt-6" onClick={() => router.push('/chef/tomarpedido')} />
              <Button label="Control de pedidos" icon="pi-arrow-right" className="w-full mt-6" onClick={() => router.push('/chef/controlpedido')}/>
              <Button label="Reasignar un pedido" icon="pi-arrow-right" className="w-full mt-6" onClick={() => router.push('/chef/reasignarpedido')}/>
            </div>
            <div className="mt-4">
              <Button label="Log Out" className="p-button-text p-button-sm p-button-secondary p-button-outlined" onClick={() => router.push('/chef/login')} />
            </div>
          
        </div>
      </div>
    </PrimeReactProvider>
  );
}
