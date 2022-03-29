import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { useWalletConnector, setNet } from "./WalletConnector.js";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const wallets = [
    { label: "Metamask ETH", provider: "injected_eth" },
    { label: "Wallet Connect ETH", provider: "walletconnect_eth" },
    { label: "Metamask BSC", provider: "injected_bsc" },
    { label: "Wallet Connect BSC", provider: "walletconnect_bsc" },
];

const WalletProviders = ({ walletProvidersDialogOpen, handleWalletProvidersDialogToggle }) => {
    const { library, account } = useWeb3React();
    const { loginMetamask, loginWalletConnect } = useWalletConnector();

    useEffect(() => {
        // console.log("library", library)
        if (library) {
            handleWalletProvidersDialogToggle();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [library, account]);

    // console.log("test", window)

    useEffect(() => {
        if (window.localStorage.getItem("connected")) {
            connectWallet(window.localStorage.getItem("wallet"));
        }
    });

    const connectWallet = async (walletprovider) => {
        if (walletprovider === "injected_eth") {
            setNet(0);
            window.localStorage.setItem("wallet", "injected_eth");
            loginMetamask();
        } else if (walletprovider === "walletconnect_eth") {
            window.localStorage.setItem("wallet", "walletconnect_eth");
            setNet(0);
            loginWalletConnect();
        } else if (walletprovider === "injected_bsc") {
            setNet(1);
            window.localStorage.setItem("wallet", "walletconnect_eth");
            loginMetamask();
        } else if (walletprovider === "walletconnect_bsc") {
            setNet(1);
            window.localStorage.setItem("wallet", "walletconnect_bsc");
            loginWalletConnect();
        }
    };

    return (
        <Dialog
            open={walletProvidersDialogOpen}
            onClose={handleWalletProvidersDialogToggle}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            BackdropProps={{ style: { backgroundColor: "rgba(32, 38, 45, 0.2)", backdropFilter: "blur(2px)" } }}
            PaperProps={{
                style: { borderRadius: 25, boxShadow: "none" },
            }}
            fullWidth
            maxWidth="xs"
        >
            <DialogTitle id="alert-dialog-title" sx={{ p: 3 }}>
                <Stack direction="row" justifyContent="space-between" spacing={2}>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 500 }}>
                            Connect Wallet
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Select a wallet provider
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton onClick={handleWalletProvidersDialogToggle} aria-label="close" sx={{ bgcolor: "grey.100" }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Stack>
            </DialogTitle>
            <DialogContent>
                {wallets.map((wallet) => (
                    <Button
                        key={wallet.label}
                        variant="contained"
                        disableElevation
                        sx={{ my: 1 }}
                        fullWidth
                        onClick={() => connectWallet(wallet.provider)}
                    >
                        Connect via {wallet.label}
                    </Button>
                ))}
            </DialogContent>
            <DialogActions></DialogActions>
        </Dialog>
    );
};

export default WalletProviders;
