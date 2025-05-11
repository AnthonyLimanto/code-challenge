import { MOCK_DUE_CHARGES_API, MOCK_ENERGY_ACCOUNTS_API } from "./MOCKDATA"

// Currently Mock the Mock XD, later will switch to use Backend api
export const fetchBalance = async (accountId: string) => {
    const balance = await MOCK_DUE_CHARGES_API();
    return balance;
}