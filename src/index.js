import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1a90ff",
        },
    },
    typography: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                text: {
                    fontWeight: 600,
                    textTransform: "inherit",
                },
                contained: {
                    fontWeight: 700,
                    textTransform: "inherit",
                    borderRadius: 25,
                },
            },
        },
    },
});

const POLLING_INTERVAL = 12000;

const getLibrary = (provider) => {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = POLLING_INTERVAL;
    return library;
};

const Application = () => {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="mask"></div>
                <App />
            </ThemeProvider>
        </Web3ReactProvider>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Application />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
