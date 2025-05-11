import type { FC } from "react";
import type { Account } from "../types/Account";
import { Avatar, Card, CardHeader, CardContent, Typography, Box, Button } from "@mui/material";

interface AccountCardProps {
    account: Account;
}

export const AccountCard: FC<AccountCardProps> = ({ account }) => {
    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <CardHeader
                    avatar={
                        <Avatar>
                            Icon
                        </Avatar>
                    }
                />
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                            <Typography component="div" variant="h4">
                                {account.type}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                component="div"
                                sx={{ color: 'text.secondary' }}
                            >
                                {account.id}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                component="div"
                                sx={{ color: 'text.secondary' }}
                            >
                                {account.address}
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: 'row', paddingTop: '16px' }}>
                                <Typography component="div" variant="h6" style={{  paddingRight: '100%' }}>
                                    Account Balance
                                </Typography>

                                <Typography component="div" variant="p" color="primary" >
                                    Account Balance
                                </Typography>

                            </Box>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ marginTop: '16px' }}
                                onClick={() => {
                                    // Add your payment logic here
                                    console.log("Make Payment button clicked");
                                }}
                            >
                                Make Payment
                            </Button>
                        </Box>

                    </Box>
                </CardContent>
            </Box>
        </Card>
    );
};