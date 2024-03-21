"use client"

import { StyleClass } from 'primereact/styleclass';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import React, { useState } from "react";

export default function Home({ Component, pageProps }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
  };

  const value = {
    ripple: true
  };

  return (
    <PrimeReactProvider value={value}>
      <div className="flex justify-content-center align-items-end">
          <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
              <div className="text-center mb-5">
                  <div className="text-900 text-3xl font-medium mb-3">Bienvenido administrador</div>
              </div>

              <div>
                  <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                  <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" />

                  <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                  <InputText id="password" type="password" placeholder="Password" className="w-full mb-3" />

                  <Button label="Sign In" icon="pi pi-user" className="w-full" />
              </div>
          </div>
      </div>
    </PrimeReactProvider>
  );
}