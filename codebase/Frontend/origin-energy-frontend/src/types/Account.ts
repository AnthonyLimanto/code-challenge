export interface BaseAccount {
    id: string;
    address: string;
    balance: number;
}

export interface ElectricityAccount extends BaseAccount {
    type: "ELECTRICITY";
    meterNumber: string;

};

export interface GasAccount extends BaseAccount {
    type: "GAS";
    volume: number;
};

export type Account = ElectricityAccount | GasAccount;