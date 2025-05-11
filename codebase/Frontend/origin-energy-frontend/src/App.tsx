import { useState, useEffect } from 'react';
import './App.css';
import { AccountCard } from './components/AccountCard';
import type { Account } from './types/Account';
import { fetchAccounts } from './api/accounts';
import { FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material';

function App() {
	const [accounts, setAccounts] = useState<Account[]>([]);
	const [filteredAccounts, setFilteredAccounts] = useState<Account[]>([]);
	const [filterType, setFilterType] = useState<string>('ALL'); // Default to show all accounts

	useEffect(() => {
		// Fetch accounts from the API
		const fetchAccountsData = async () => {
		try {
			const accountsData = await fetchAccounts(); // Fetch accounts with balances
			setAccounts(accountsData);
			setFilteredAccounts(accountsData); // Initially show all accounts
		} catch (error) {
			console.error('Error fetching accounts:', error);
		}
		};

		fetchAccountsData();
	}, []);

	useEffect(() => {
		// Filter accounts based on the selected type
		if (filterType === 'ALL') {
			setFilteredAccounts(accounts);
		} else {
			setFilteredAccounts(accounts.filter((account) => account.type === filterType));
		}
	}, [filterType, accounts]);

	return (
		<div>
			{/* Filter Dropdown */}
			<Box sx={{ marginBottom: 2, width: '300px' }}>
			<FormControl fullWidth>
				<InputLabel id="account-type-filter-label">Filter by Account Type</InputLabel>
				<Select
				labelId="account-type-filter-label"
				id="account-type-filter"
				value={filterType}
				label="Filter by Account Type"
				onChange={(e) => setFilterType(e.target.value)}
				>
					<MenuItem value="ALL">All</MenuItem>
					<MenuItem value="ELECTRICITY">Electricity</MenuItem>
					<MenuItem value="GAS">Gas</MenuItem>
				</Select>
			</FormControl>
			</Box>

			{/* Account Cards */}
			{filteredAccounts.map((account) => (
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