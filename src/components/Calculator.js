import * as React from "react";
import { connect } from "../store/walletActions";
import Account from "./account/";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import { InputBase } from "@mui/material";
import Slider, { SliderThumb } from "@mui/material/Slider";

export default function Calculator(props) {
    const [pro, setPro] = useState(0);
    const apy = 383025.8;
    const [price, setPrice] = useState(160.63);
    const [m_price, setMPrice] = useState(160.63);
    const [day, setDay] = useState(30);
    useEffect(() => {}, [pro, apy, price, m_price, day]);
    return (
        <>
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
                                    SAFUU Price
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    $160.63
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
                                    Your SAFUU Balance
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    0 SAFUU
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className="form-group" style={{ textAlign: "left" }}>
                                    <label htmlFor="formGroupExampleInput">SAFUU Amount</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) => {
                                            setPro(e.target.value);
                                        }}
                                        value={pro}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className="form-group" style={{ textAlign: "left" }}>
                                    <label htmlFor="formGroupExampleInput">APY (%)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        readOnly 
                                        value={apy}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className="form-group" style={{ textAlign: "left" }}>
                                    <label htmlFor="formGroupExampleInput">SAFUU price at purchase ($)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) => {
                                            setPrice(e.target.value);
                                        }}
                                        value={price}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className="form-group" style={{ textAlign: "left" }}>
                                    <label htmlFor="formGroupExampleInput">Future SAFUU market price ($)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) => {
                                            setMPrice(e.target.value);
                                        }}
                                        value={m_price}
                                    />
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
                                    onChange={(event, value) => {
                                        setDay(value);
                                    }}
                                    aria-label="custom thumb label"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Box className={"calculator_box"}>
                                    <Typography variant="h6">Your initial investment</Typography>
                                    <Typography variant="h6">${pro * price}</Typography>
                                </Box>
                                <Box className={"calculator_box"}>
                                    <Typography variant="h6">Current wealth</Typography>
                                    <Typography variant="h6">${pro * price}</Typography>
                                </Box>
                                <Box className={"calculator_box"}>
                                    <Typography variant="h6">SAFUU rewards estimation</Typography>
                                    <Typography variant="h6">{Math.pow(Math.log((apy-1))/Math.log(365),day)*pro} SAFUU</Typography>
                                </Box>
                                <Box className={"calculator_box"}>
                                    <Typography variant="h6">Potential return</Typography>
                                    <Typography variant="h6">${Math.pow(Math.log((apy-1))/Math.log(365),day)*pro*price}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}
