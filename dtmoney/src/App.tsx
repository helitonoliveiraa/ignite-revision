import { useState } from "react";
import { createServer, Model } from "miragejs"

import { Header } from './components/Header';
import { NewTransactionModal } from "./components/NewTransactionModal";
import { Dashboard } from './pages/Dashboard';
import { TransactionsProvider } from './contexts/Transactions';

import { globalStyle } from './styles/global';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          title: 'Web site with React',
          amount: 12000,
          type: 'income',
          category: 'Tech',
          createdAt: new Date(),
        },
        {
          title: 'Refactor front-end React Native',
          amount: 12000,
          type: 'outcome',
          category: 'Tech',
          createdAt: new Date(),
        }
      ]
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('transactions', () => {
      // return [
      //   {
      //     id: 1,
      //     title: 'Transaction 1',
      //     amount: 12000,
      //     type: 'income',
      //     category: 'Food',
      //     createdAt: new Date(),
      //   },
      //   {
      //     id: 2,
      //     title: 'Transaction 2',
      //     amount: 12000,
      //     type: 'outcome',
      //     category: 'Food',
      //     createdAt: new Date(),
      //   }
      // ]
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', {
        ...data,
        createdAt: new Date(),
      });
    });
  }
});

function App() {
  const [isOpenTransactionModal, setIsOpenTransactionModal] = useState(false);

  globalStyle();

  function handleCloseNewTransactionModal() {
    setIsOpenTransactionModal(false);
  }
  
  function handleOpenNewTransactionModal() {
    setIsOpenTransactionModal(true);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isOpenTransactionModal}
        onClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}

export { App };
