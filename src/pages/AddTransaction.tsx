import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransactions } from '../context/TransactionContext';
import { Transaction, TransactionCategory, TransactionType } from '../types/transaction';
import { format } from 'date-fns';

const categories: TransactionCategory[] = [
  'Groceries',
  'Transportation',
  'Entertainment',
  'Housing',
  'Utilities',
  'Healthcare',
  'Education',
  'Shopping',
  'Salary',
  'Investment',
  'Other',
];

export const AddTransaction = () => {
  const navigate = useNavigate();
  const { dispatch } = useTransactions();
  const [type, setType] = useState<TransactionType>('expense');
  const today = format(new Date(), 'yyyy-MM-dd');
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const transaction: Transaction = {
      id: crypto.randomUUID(),
      name: formData.get('name') as string,
      amount: Number(formData.get('amount')),
      date: formData.get('date') as string,
      category: formData.get('category') as TransactionCategory,
      type,
      notes: formData.get('notes') as string,
    };
    
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    navigate('/transactions');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Transaction</h2>
      
      <form onSubmit={handleSubmit} className="max-w-lg bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <div className="flex space-x-4 mb-6">
            <button
              type="button"
              className={`flex-1 py-2 px-4 rounded-lg ${
                type === 'expense'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setType('expense')}
            >
              Expense
            </button>
            <button
              type="button"
              className={`flex-1 py-2 px-4 rounded-lg ${
                type === 'income'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setType('income')}
            >
              Income
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Transaction Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount (DZD)
              </label>
              <input
                type="number"
                name="amount"
                step="0.01"
                min="0"
                required
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                name="date"
                defaultValue={today}
                required
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                required
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes (Optional)
              </label>
              <textarea
                name="notes"
                rows={3}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};