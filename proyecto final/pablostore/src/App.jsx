import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import VinylCatalog from './componentes/VinylCatalog';
import ProductDetail from './componentes/ProductDetail';
import Cart from './componentes/Cart';

function App() {
  const [filtro, setFiltro] = useState('todos');

  return (
    <div>
      {/* Pasamos el filtro y setFiltro al Header */}
      <Header filtro={filtro} setFiltro={setFiltro} />

      <div style={{ paddingTop: '100px' }}>
        <Routes>
          {/* Pasamos el filtro como prop al catálogo */}
          <Route path="/" element={<VinylCatalog filtro={filtro} />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;


