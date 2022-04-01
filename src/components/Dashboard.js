import * as React from "react";
import { connect } from "../store/walletActions";
import Account from "./account/";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

export default function Dashboard(props) {
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
            <Fade in={true} style={{ transitionDelay: "100ms" }}>
                <Box sx={{ flexGrow: 1, maxWidth: "1000px", mx: "auto" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <Item>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={4}>
                                        <Typography variant="h6" component="div" gutterBottom>
                                            MEDUSA Price
                                        </Typography>
                                        <Typography variant="body1" gutterBottom>
                                            $0
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Typography variant="h6" component="div" gutterBottom>
                                            Market Cap
                                        </Typography>
                                        <Typography variant="body1" gutterBottom>
                                            $0
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Typography variant="h6" component="div" gutterBottom>
                                            Circulating Supply
                                        </Typography>
                                        <Typography variant="body1" gutterBottom>
                                            0
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Typography variant="h6" component="div" gutterBottom>
                                            Backed Liquidity
                                        </Typography>
                                        <Typography variant="body1" gutterBottom>
                                            100%
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Typography variant="h6" component="div" gutterBottom>
                                            Next Rebase
                                        </Typography>
                                        <Typography variant="body1" gutterBottom>
                                            15:00:00
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Typography variant="h6" component="div" gutterBottom>
                                            Total Supply
                                        </Typography>
                                        <Typography variant="body1" gutterBottom>
                                            0
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Item>
                                <Typography variant="h6" component="div" gutterBottom>
                                    MEDUSA Price
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    $0
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Item>
                                <Typography variant="h6" component="div" gutterBottom>
                                    Market Value of Treasury Asset
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    $0
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Item>
                                <Typography variant="h6" component="div" gutterBottom>
                                    Pool Value
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    $0
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Item>
                                <Typography variant="h6" component="div" gutterBottom>
                                    Risk Free Fund Value
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    $0
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Item>
                                <Typography variant="h6" component="div" gutterBottom>
                                    # Value of Venom Pit
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    0 MEDUSA
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Item>
                                <Typography variant="h6" component="div" gutterBottom>
                                    $ Value of Venom Pit
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    $0
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Item>
                                <Typography variant="h6" component="div" gutterBottom>
                                    % Venom Pit : Supply
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    0%
                                </Typography>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Fade>
        </>
    );
}
