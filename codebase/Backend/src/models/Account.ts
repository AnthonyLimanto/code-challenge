export type ElectricityAccount = {
    id: string;
    type: "ELECTRICITY";
    address: string;
    meterNumber: string;
    balance: number;
};

export type GasAccount = {
    id: string;
    type: "GAS";
    address: string;
    volume: number;
    balance: number;
};

export type Account = ElectricityAccount | GasAccount;