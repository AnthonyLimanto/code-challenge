import { getEnergyAccounts } from '../api/AccountApi';
import { getDueCharges } from '../api/DueChargesApi';

export const getEnergyAccountsWithBalances = async () => {
    // Fetch accounts and due charges
    const accounts = await getEnergyAccounts();
    const dueCharges = await getDueCharges();

    // Calculate balances by aggregating amounts for each accountId
    const balances = dueCharges.reduce((acc: { [accountId: string]: number }, charge) => {
        const { accountId, amount } = charge;
        acc[accountId] = (acc[accountId] || 0) + amount;
        return acc;
    }, {});

    // Merge balances into accounts
    const accountsWithBalances = accounts.map((account: any) => ({
        ...account,
        balance: balances[account.id] || 0, // Default balance to 0 if no charges exist
    }));

    return accountsWithBalances;
};