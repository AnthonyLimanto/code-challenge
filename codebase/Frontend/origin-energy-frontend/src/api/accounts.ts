import { MOCK_ENERGY_ACCOUNTS_API, MOCK_DUE_CHARGES_API } from "./MOCKDATA";

// Fetch accounts and include their balances
// Later in the back end combine the accounts balance so here only call accounts api
export const fetchAccounts = async () => {
    // Fetch accounts
    const accounts = await MOCK_ENERGY_ACCOUNTS_API();

    // Fetch balances
    const balances = await MOCK_DUE_CHARGES_API();

    // Merge balances into accounts
    const accountsWithBalances = accounts.map((account: any) => ({
        ...account,
        balance: balances[account.id] || 0, // Default balance to 0 if not found
    }));

    return accountsWithBalances;
};