import type { FC } from "react";
import type { Account } from "../types/Account";
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";

interface AccountCardProps {
    account: Account;
    onPay: (account: Account) => void;
}

export const AccountCard: FC<AccountCardProps> = ({ account, onPay }) => {
	const { type, id, address, balance } = account;
	const balanceColor =
		balance > 0 ? "success.main" : balance < 0 ? "error.main" : "grey.500";

	return (
		<Card sx={{ maxWidth: 500, mx: "auto", my: 2, p: 2 }}>
		{/* Row 1: Avatar + Details */}
		<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
			<Avatar sx={{ mr: 2 }}></Avatar>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
				<Typography variant="h6">{type}</Typography>
				<Typography variant="subtitle2" color="text.secondary">
					{id}
				</Typography>
				<Typography variant="subtitle2" color="text.secondary">
					{address}
				</Typography>
			</Box>
		</Box>

		{/* Row 2: Balance (indented to match details) */}
		<Box
			sx={{
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			pl: 6, 
			pr: 2, 
			mb: 2,
			}}
		>
			<Typography variant="subtitle1">Account Balance</Typography>
			<Typography variant="h6" sx={{ color: balanceColor }}>
			${balance.toFixed(2)}
			</Typography>
		</Box>

		{/* Button: also indented */}
		<Box sx={{ pl: 6, textAlign: "left" }}>
			<Button
			variant="contained"
			color="primary"
			onClick={() => onPay(account)}
			>
			Make Payment
			</Button>
		</Box>
		</Card>
	);
};
