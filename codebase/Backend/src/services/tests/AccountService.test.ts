import { getEnergyAccountsWithBalances } from '../AccountService';
import { getEnergyAccounts } from '../../api/AccountApi';
import { getDueCharges } from '../../api/DueChargesApi';

// Mock the dependencies
jest.mock('../../api/AccountApi', () => ({
  getEnergyAccounts: jest.fn(),
}));

jest.mock('../../api/DueChargesApi', () => ({
  getDueCharges: jest.fn(),
}));

// Reset mocks before each test
beforeEach(() => {
  jest.clearAllMocks(); // Clears mock calls, instances, and results
});

describe('getEnergyAccountsWithBalances', () => {
  it('should return accounts with calculated balances', async () => {
    // Mock data for accounts
    const mockAccounts = [
      { id: 'A-0001', type: 'ELECTRICITY', address: '123 Main St' },
      { id: 'A-0002', type: 'GAS', address: '456 Elm St' },
    ];

    // Mock data for due charges
    const mockDueCharges = [
      { id: 'D-0001', accountId: 'A-0001', date: '2025-04-01', amount: 50 },
      { id: 'D-0002', accountId: 'A-0001', date: '2025-04-02', amount: -20 },
      { id: 'D-0003', accountId: 'A-0002', date: '2025-04-03', amount: 30 },
    ];

    // Mock the implementations of the dependencies
    (getEnergyAccounts as jest.Mock).mockResolvedValue(mockAccounts);
    (getDueCharges as jest.Mock).mockResolvedValue(mockDueCharges);

    // Call the service function
    const result = await getEnergyAccountsWithBalances();

    // Expected result
    const expected = [
      { id: 'A-0001', type: 'ELECTRICITY', address: '123 Main St', balance: 30 }, // 50 - 20 = 30
      { id: 'A-0002', type: 'GAS', address: '456 Elm St', balance: 30 }, // 30
    ];

    // Assertions
    expect(result).toEqual(expected);
    expect(getEnergyAccounts).toHaveBeenCalledTimes(1);
    expect(getDueCharges).toHaveBeenCalledTimes(1);
  });

  it('should return accounts with a balance of 0 if no charges exist', async () => {
    // Mock data for accounts
    const mockAccounts = [
      { id: 'A-0001', type: 'ELECTRICITY', address: '123 Main St' },
      { id: 'A-0002', type: 'GAS', address: '456 Elm St' },
    ];

    // Mock empty due charges
    const mockDueCharges: any[] = [];

    // Mock the implementations of the dependencies
    (getEnergyAccounts as jest.Mock).mockResolvedValue(mockAccounts);
    (getDueCharges as jest.Mock).mockResolvedValue(mockDueCharges);

    // Call the service function
    const result = await getEnergyAccountsWithBalances();

    // Expected result
    const expected = [
      { id: 'A-0001', type: 'ELECTRICITY', address: '123 Main St', balance: 0 },
      { id: 'A-0002', type: 'GAS', address: '456 Elm St', balance: 0 },
    ];

    // Assertions
    expect(result).toEqual(expected);
    expect(getEnergyAccounts).toHaveBeenCalledTimes(1);
    expect(getDueCharges).toHaveBeenCalledTimes(1);
  });
});