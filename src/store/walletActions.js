import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from '@walletconnect/web3-provider'

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

export const connect = () => {
  return async (dispatch) => {
    try {
      const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            rpc: {
              1: 'https://bridge.walletconnect.org'
            },
            chainId: 1,
          },
        }
       };
  
      const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: false, // optional
        providerOptions, // required
        theme: {
          background: "rgba(17, 23, 64, 0.9)",
          main: "rgba(199, 199, 199, 0.9)",
          secondary: "rgba(136, 136, 136, 0.5)",
          border: "rgba(3, 9, 32, 0.14)",
          hover: "rgb(3, 9, 32)",
        }
      });
      
      const instance = await web3Modal.connect();
      
      const provider = new ethers.providers.Web3Provider(instance);
      if(parseInt(provider.chainId, 16) !== 1) {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x1' }],
        })
      }
      const signer = provider.getSigner();
      const account = await signer.getAddress()
      dispatch(
        connectSuccess({
          account: account,
          provider: provider,
        })
      );
      console.log(signer)
      provider.on("accountsChanged", (accounts) => {
        dispatch(
          connectSuccess({
            account: accounts[0],
            provider: provider,
          })
        );
      });
      
      // Subscribe to chainId change
      provider.on("chainChanged", async (chainId) => {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x1' }],
        })
      });
          
    } catch(err) {
      console.log(err)
    }
  }
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
  };
};
