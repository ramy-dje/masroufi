import React from 'react';
import { useTransactions } from '../context/TransactionContext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const Reports = () => {
  const { state } = useTransactions();

  // Prepare data for expense distribution pie chart
  const expensesByCategory = state.transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
      return acc;
    }, {} as Record<string, number>);

  const pieChartData = {
    labels: Object.keys(expensesByCategory),
    datasets: [
      {
        data: Object.values(expensesByCategory),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
      },
    ],
  };

  // Prepare data for monthly income vs expenses bar chart
  const monthlyData = state.transactions.reduce(
    (acc, curr) => {
      const month = new Date(curr.date).toLocaleString('default', { month: 'short' });
      if (curr.type === 'income') {
        acc.income[month] = (acc.income[month] || 0) + curr.amount;
      } else {
        acc.expenses[month] = (acc.expenses[month] || 0) + curr.amount;
      }
      return acc;
    },
    { income: {} as Record<string, number>, expenses: {} as Record<string, number> }
  );

  const months = Array.from(
    new Set([...Object.keys(monthlyData.income), ...Object.keys(monthlyData.expenses)])
  );

  const barChartData = {
    labels: months,
    datasets: [
      {
        label: 'Income',
        data: months.map((month) => monthlyData.income[month] || 0),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
      {
        label: 'Expenses',
        data: months.map((month) => monthlyData.expenses[month] || 0),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Financial Reports</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Expense Distribution</h3>
          <div className="aspect-square">
            <Pie data={pieChartData} options={{ responsive: true, maintainAspectRatio: true }} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Monthly Income vs Expenses</h3>
          <Bar
            data={barChartData}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Amount (DZD)',
                  },
                },
              },
              plugins: {
                legend: {
                  position: 'top' as const,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};