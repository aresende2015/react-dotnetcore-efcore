import React from 'react';
import './App.css';
import Atividade from "./pages/atividades/Atividade";
import { Routes, Route } from 'react-router-dom';
import Cliente from './pages/clientes/Cliente';
import Dashboard from './pages/dashboard/Dashboard';
import ClienteForm from './pages/clientes/ClienteForm';
import PageNotFound from './pages/PageNotFound';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/atividade/lista' element={<Atividade />} />
        <Route path='/cliente/lista' element={<Cliente />} />        
        {/*<Route path='/cliente/detalhe' element={<ClienteForm />} />        */}
        <Route path="/cliente/detalhe" element={<ClienteForm />}>
            <Route path=":id" element={<ClienteForm />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      
    </>
  );
}
