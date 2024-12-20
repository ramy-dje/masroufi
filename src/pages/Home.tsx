import React from 'react';
import { useTransactions } from '../context/TransactionContext';
import { ArrowUpCircle, ArrowDownCircle, Wallet } from 'lucide-react';

export const Home = () => {
  const { state } = useTransactions();
  
  const totalIncome = state.transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);
    
  const totalExpenses = state.transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);
    
  const balance = totalIncome - totalExpenses;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Welcome to Masroofy</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-100 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-green-800">Total Income</h3>
            <ArrowUpCircle className="text-green-600" size={24} />
          </div>
          <p className="text-2xl font-bold text-green-600">{totalIncome.toFixed(2)} DZD</p>
        </div>

        <div className="bg-red-100 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-red-800">Total Expenses</h3>
            <ArrowDownCircle className="text-red-600" size={24} />
          </div>
          <p className="text-2xl font-bold text-red-600">{totalExpenses.toFixed(2)} DZD</p>
        </div>

        <div className="bg-blue-100 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-blue-800">Balance</h3>
            <Wallet className="text-blue-600" size={24} />
          </div>
          <p className="text-2xl font-bold text-blue-600">{balance.toFixed(2)} DZD</p>
        </div>
      </div>

      <div className="mt-12 bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h3>
        {state.transactions.length === 0 ? (
          <p className="text-gray-600">No transactions yet. Start by adding one!</p>
        ) : (
          <div className="space-y-4">
            {state.transactions.slice(-5).map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <p className="font-semibold text-gray-800">{transaction.name}</p>
                  <p className="text-sm text-gray-600">{transaction.category}</p>
                </div>
                <p
                  className={`font-semibold ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {transaction.type === 'income' ? '+' : '-'} {transaction.amount.toFixed(2)} DZD
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};