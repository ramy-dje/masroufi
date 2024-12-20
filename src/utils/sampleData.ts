import { Transaction } from '../types/transaction';

export const sampleTransactions: Transaction[] = [
  {
    id: '1',
    name: 'Monthly Salary',
    amount: 120000,
    date: '2024-03-01',
    category: 'Salary',
    type: 'income',
  },
  {
    id: '2',
    name: 'Rent Payment',
    amount: 35000,
    date: '2024-03-05',
    category: 'Housing',
    type: 'expense',
  },
  {
    id: '3',
    name: 'Grocery Shopping',
    amount: 12000,
    date: '2024-03-08',
    category: 'Groceries',
    type: 'expense',
  },
  {
    id: '4',
    name: 'Internet Bill',
    amount: 4500,
    date: '2024-03-10',
    category: 'Utilities',
    type: 'expense',
  },
  {
    id: '5',
    name: 'Investment Return',
    amount: 25000,
    date: '2024-02-28',
    category: 'Investment',
    type: 'income',
  },
  {
    id: '6',
    name: 'Restaurant Dinner',
    amount: 3500,
    date: '2024-02-25',
    category: 'Entertainment',
    type: 'expense',
  },
  {
    id: '7',
    name: 'Transportation',
    amount: 2000,
    date: '2024-02-20',
    category: 'Transportation',
    type: 'expense',
  },
  {
    id: '8',
    name: 'Medical Checkup',
    amount: 8000,
    date: '2024-02-15',
    category: 'Healthcare',
    type: 'expense',
  }
];