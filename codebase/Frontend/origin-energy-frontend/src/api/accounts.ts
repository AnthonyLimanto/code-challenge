import { MOCK_ENERGY_ACCOUNTS_API } from "./MOCKDATA"

// Currently Mock the Mock XD, later will switch to use Backend api
export const fetchAccounts = async () => {
    const accountData = await MOCK_ENERGY_ACCOUNTS_API();
    return accountData;
}