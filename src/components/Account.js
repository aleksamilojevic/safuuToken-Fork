import * as React from "react";
import { connect } from "../store/walletActions";
import Account from "./account/";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Accounts(props) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: "white",
        border: "solid thin #e7b913",
        borderRadius: "10px",
        paddingTop: "1rem",
        paddingBottom: "1rem",
    }));
    return (
        <>
            <Box sx={{ flexGrow: 1, maxWidth: "1000px", mx: "auto" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Item>
                            <Typography variant="h6" component="div" gutterBottom>
                                Your Balance
                            </Typography>
                            <Typography variant="h4" gutterBottom>
                                $0
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                0 MEDUSA
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Item>
                            <Typography variant="h6" component="div" gutterBottom>
                                APY
                            </Typography>
                            <Typography variant="h4" gutterBottom>
                                383,025.8%
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Daily ROI 2.28%
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Item>
                            <Typography variant="h6" component="div" gutterBottom>
                                Next Rebase:
                            </Typography>
                            <Typography variant="h4" gutterBottom>
                                10:00:00
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                You will earn money soon
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Item>
                            <Box className={"account_box"}>
                                <Typography variant="h6">Current MEDUSA Price</Typography>
                                <Typography variant="h6">$160.74</Typography>
                            </Box>
                            <Box className={"account_box"}>
                                <Typography variant="h6">Next Reward Amount</Typography>
                                <Typography variant="h6">0 MEDUSA</Typography>
                            </Box>
                            <Box className={"account_box"}>
                                <Typography variant="h6">Next Reward Amount USD</Typography>
                                <Typography variant="h6">$0</Typography>
                            </Box>
                            <Box className={"account_box"}>
                                <Typography variant="h6">Next Reward Yield</Typography>
                                <Typography variant="h6">0.02355%</Typography>
                            </Box>
                            <Box className={"account_box"}>
                                <Typography variant="h6">ROI(1-Day Rate) USD</Typography>
                                <Typography variant="h6">$0</Typography>
                            </Box>
                            <Box className={"account_box"}>
                                <Typography variant="h6">ROI(5-Day Rate)</Typography>
                                <Typography variant="h6">11.96%</Typography>
                            </Box>
                            <Box className={"account_box"}>
                                <Typography variant="h6">ROI(5-Day Rate) USD</Typography>
                                <Typography variant="h6">$0</Typography>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
