import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TransactionProvider } from './context/TransactionContext';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { AddTransaction } from './pages/AddTransaction';
import { TransactionList } from './pages/TransactionList';
import { Reports } from './pages/Reports';

function App() {
  return (
    <TransactionProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddTransaction />} />
            <Route path="/transactions" element={<TransactionList />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </Router>
    </TransactionProvider>
  );
}

export default App;