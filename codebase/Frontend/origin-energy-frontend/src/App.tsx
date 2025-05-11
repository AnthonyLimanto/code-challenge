import { useState, useEffect } from 'react';
import './App.css';
import { AccountCard } from './components/AccountCard';
import type { Account } from './types/Account';
import { fetchAccounts } from './api/accounts';

function App() {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    // Fetch accounts from the API
    const fetchAccountsData = async () => {
      try {
        const accountsData = await fetchAccounts(); // Fetch accounts with balances
        setAccounts(accountsData);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    fetchAccountsData();
  }, []);

  return (
    <div>
      {accounts.map((account) => (
        <AccountCard
          key={account.id}
          account={account}
          onPay={(account) => console.log(`Paying for account: ${account.id}`)} // Replace with actual payment logic
        />
      ))}
    </div>
  );
}

export default App;