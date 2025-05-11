const BASEURL = "http://localhost:3000/"

export const fetchAccounts = async () => {
    try {
        // Call the backend API to fetch accounts with balances
        const response = await fetch(BASEURL + 'accounts'); 
        if (!response.ok) {
            throw new Error(`Failed to fetch accounts: ${response.statusText}`);
        }

        // Parse the JSON response
        const accounts = await response.json();
        return accounts;
    } catch (error) {
        console.error('Error fetching accounts:', error);
        throw error; 
    }
};