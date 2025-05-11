import { MOCK_ENERGY_ACCOUNTS_API } from "./MOCKDATA";

export const getEnergyAccounts = async () => {
    return await MOCK_ENERGY_ACCOUNTS_API();
}