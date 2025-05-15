import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AccountCard } from "./AccountCard";
import { Account } from "../types/Account";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();



// Sample account to test with
const mockAccount: Account = {
    id: "A-0001",
    type: "ELECTRICITY",
    address: "1 Greville Ct, Thomastown, 3076, Victoria",
    meterNumber: "1234567890",
    balance: -45.5,
};

describe("AccountCard", () => {
    test("renders account information correctly", () => {
        const mockPay = jest.fn();
        render(<AccountCard account={mockAccount} onPay={mockPay} />);

        expect(screen.getByText("ELECTRICITY")).toBeInTheDocument();
        expect(screen.getByText("A-0001")).toBeInTheDocument();
        expect(screen.getByText("1 Greville Ct, Thomastown, 3076, Victoria")).toBeInTheDocument();
        expect(screen.getByText("Account Balance")).toBeInTheDocument();
        expect(screen.getByText("$-45.50")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Make Payment" })).toBeInTheDocument();
    });

    test("calls onPay when the Make Payment button is clicked", () => {
        const mockPay = jest.fn();
        render(<AccountCard account={mockAccount} onPay={mockPay} />);

        const button = screen.getByRole("button", { name: "Make Payment" });
        fireEvent.click(button);

        expect(mockPay).toHaveBeenCalledTimes(1);
        expect(mockPay).toHaveBeenCalledWith(mockAccount);
    });

    test("shows correct balance color based on balance", () => {
        const positiveBalanceAccount = { ...mockAccount, balance: 100 };
        const zeroBalanceAccount = { ...mockAccount, balance: 0 };
        const negativeBalanceAccount = { ...mockAccount, balance: -20 };
      
        const { rerender } = render(
          <ThemeProvider theme={theme}>
            <AccountCard account={positiveBalanceAccount} onPay={() => {}} />
          </ThemeProvider>
        );
      
        const positiveBalance = screen.getByText("$100.00");
      
        // Check if the color is the theme's success.main color
        expect(positiveBalance).toHaveStyle(`color: ${theme.palette.success.main}`);
      
        // Rerender with zero balance
        rerender(
            <ThemeProvider theme={theme}>
                <AccountCard account={zeroBalanceAccount} onPay={() => {}} />
            </ThemeProvider>
        );
        const zeroBalance = screen.getByText("$0.00");
        expect(zeroBalance).toHaveStyle(`color: ${theme.palette.grey[500]}`);
      
        // Rerender with negative balance
        rerender(
            <ThemeProvider theme={theme}>
                <AccountCard account={negativeBalanceAccount} onPay={() => {}} />
            </ThemeProvider>
        );
        const negativeBalance = screen.getByText("$-20.00");
        expect(negativeBalance).toHaveStyle(`color: ${theme.palette.error.main}`);
      });
});
