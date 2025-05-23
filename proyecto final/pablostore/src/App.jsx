// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import VinylCatalog from './componentes/VinylCatalog';
import ProductDetail from './componentes/ProductDetail';

function App() {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: '100px' }}>
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<VinylCatalog />} />

          {/* Detalle del producto con id dinámico */}
          <Route path="/producto/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
