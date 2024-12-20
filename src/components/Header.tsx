import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wallet } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wallet size={32} />
            <h1 className="text-2xl font-bold">Masroofy</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-indigo-200 ${isActive ? 'text-indigo-200 font-semibold' : ''}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add"
                  className={({ isActive }) =>
                    `hover:text-indigo-200 ${isActive ? 'text-indigo-200 font-semibold' : ''}`
                  }
                >
                  Add Transaction
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/transactions"
                  className={({ isActive }) =>
                    `hover:text-indigo-200 ${isActive ? 'text-indigo-200 font-semibold' : ''}`
                  }
                >
                  Transactions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reports"
                  className={({ isActive }) =>
                    `hover:text-indigo-200 ${isActive ? 'text-indigo-200 font-semibold' : ''}`
                  }
                >
                  Reports
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};