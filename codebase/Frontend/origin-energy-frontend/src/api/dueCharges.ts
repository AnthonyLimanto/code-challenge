// import { MOCK_DUE_CHARGES_API, MOCK_ENERGY_ACCOUNTS_API } from "./MOCKDATA"

// // Currently Mock the Mock XD, later will switch to use Backend api
// export const fetchBalance = async (accountId?: string) => {
//     const balances = await MOCK_DUE_CHARGES_API();
//     if (accountId) {
//         // Return the balance for the specific accountId
//         return balances[accountId] || 0; // Default to 0 if no balance is found
//     }
//     // Return all balances if no accountId is provided
//     return balances;
// };