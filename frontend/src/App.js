import React from 'react';
import { Header, HistoryPage, ArbitragePage } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ArbitragePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="*" element={<ArbitragePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
