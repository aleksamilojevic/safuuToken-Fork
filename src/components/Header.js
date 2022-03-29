import * as React from "react";
import { connect } from "../store/walletActions";
import Account from "./account/";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
export default function Header(props) {
    const drawerWidth = 300;
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                background: "transparent",
                boxShadow: "none",
            }}
        >
            <Toolbar sx={{ justifyContent: { sm: "end", xs: "space-between" } }}>
                <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={props.openMenu} sx={{ mr: 2, display: { sm: "none" } }}>
                    <MenuIcon />
                </IconButton>
                <Box className="wallet_connect">
                    <Account />
                </Box>
            </Toolbar>
        </AppBar>
    );
}
