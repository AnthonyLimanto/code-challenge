import { Request, Response } from 'express';
import { getEnergyAccountsWithBalances } from '../services/AccountService';

export const fetchAccounts = async (_req: Request, res: Response) => {
    try {
        // Fetch accounts with balances
        const accounts = await getEnergyAccountsWithBalances();
        res.status(200).json(accounts); // Return accounts with a 200 status code
    } catch (error) {
        console.error('Error fetching accounts:', error);
        res.status(500).json({ error: 'Failed to fetch accounts' }); // Return a 500 status code with an error message
    }
};