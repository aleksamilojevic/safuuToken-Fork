import * as React from "react";
import { connect } from "../store/walletActions";
import Account from "./account/";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, Card, CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import { InputBase } from "@mui/material";
import Slider, { SliderThumb } from "@mui/material/Slider";
import Fade from "@mui/material/Fade";

export default function Calculator(props) {
    const [pro, setPro] = useState(0);
    const apy = Math.pow(2, Math.log2(383025.8 / 100 - 1) / 365);
    const [price, setPrice] = useState(0);
    const [m_price, setMPrice] = useState(0);
    const [day, setDay] = useState(30);
    useEffect(() => {}, [pro, price, m_price, day]);
    return (
        <>
            <Fade in={true} style={{ transitionDelay: "100ms" }}>
                <Box sx={{ flexGrow: 1, maxWidth: "1000px", mx: "auto" }}>
                    <Card sx={{ width: "100%", backgroundColor: "rgba(0, 0, 0, 0.3)", borderRadius: "10px", p: "1rem" }}>
                        <CardContent sx={{ color: "white" }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="h5" component="div" align="left">
                                        Calculator
                                    </Typography>
                                    <Typography variant="body2" component="div" align="left">
                                        Estimate your returns
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        MEDUSA Price
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                        $0
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        Current APY
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                        383,025.8%
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        Your MEDUSA Balance
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                        0 MEDUSA
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <div className="form-group" style={{ textAlign: "left" }}>
                                        <label htmlFor="formGroupExampleInput">MEDUSA Amount</label>
                                        <div style={{ display: "flex" }}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => {
                                                    setPro(e.target.value);
                                                }}
                                                value={pro}
                                            />
                                            <button
                                                style={{
                                                    border: "none",
                                                    marginLeft: "-42px",
                                                    backgroundColor: "#b14901",
                                                    color: "white",
                                                    borderRadius: "3px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Max
                                            </button>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <div className="form-group" style={{ textAlign: "left" }}>
                                        <label htmlFor="formGroupExampleInput">APY (%)</label>
                                        <input type="text" className="form-control" readOnly defaultValue={383025.8} />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <div className="form-group" style={{ textAlign: "left" }}>
                                        <label htmlFor="formGroupExampleInput">MEDUSA price at purchase ($)</label>
                                        <div style={{ display: "flex" }}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => {
                                                    setPrice(e.target.value);
                                                }}
                                                value={price}
                                            />
                                            <button
                                                style={{
                                                    border: "none",
                                                    marginLeft: "-69px",
                                                    backgroundColor: "#b14901",
                                                    color: "white",
                                                    borderRadius: "3px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Current
                                            </button>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <div className="form-group" style={{ textAlign: "left" }}>
                                        <label htmlFor="formGroupExampleInput">Future MEDUSA market price ($)</label>
                                        <div style={{ display: "flex" }}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => {
                                                    setMPrice(e.target.value);
                                                }}
                                                value={m_price}
                                            />
                                            <button
                                                style={{
                                                    border: "none",
                                                    marginLeft: "-69px",
                                                    backgroundColor: "#b14901",
                                                    color: "white",
                                                    borderRadius: "3px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Current
                                            </button>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="h6" align="left">
                                        {day} days
                                    </Typography>

                                    <Slider
                                        valueLabelDisplay="auto"
                                        defaultValue={day}
                                        max={365}
                                        min={1}
                                        onChange={(event, value) => {
                                            setDay(value);
                                        }}
                                        sx={{ height: "10px" }}
                                        aria-label="custom thumb label"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Box className={"calculator_box"}>
                                        <Typography variant="h6">Your initial investment</Typography>
                                        <Typography variant="h6">${(pro * price).toFixed(5)}</Typography>
                                    </Box>
                                    <Box className={"calculator_box"}>
                                        <Typography variant="h6">Current wealth</Typography>
                                        <Typography variant="h6">${(pro * price).toFixed(5)}</Typography>
                                    </Box>
                                    <Box className={"calculator_box"}>
                                        <Typography variant="h6">MEDUSA rewards estimation</Typography>
                                        <Typography variant="h6">{(Math.pow(apy, day) * pro).toFixed(5)} MEDUSA</Typography>
                                    </Box>
                                    <Box className={"calculator_box"}>
                                        <Typography variant="h6">Potential return</Typography>
                                        <Typography variant="h6">${(Math.pow(apy, day) * pro * m_price).toFixed(5)}</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>
            </Fade>
        </>
    );
}
