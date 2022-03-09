import React from 'react';
import { Header, HistoryPage, ArbitragePage, Menu } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div  style={{ display: 'flex' }}>
          <Menu />
          <Routes>
            <Route path="/" element={<ArbitragePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="*" element={<ArbitragePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
