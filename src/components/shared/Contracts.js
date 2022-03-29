import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CopyToClipboard from './CopyToClipboard';

const contracts = [
  {
    title: "ETH (Token)", 
    value: "0x25b24b3c47918b7962b3e49c4f468367f73cc0e0",
    link: "https://etherscan.io/token/0x25b24b3c47918b7962b3e49c4f468367f73cc0e0"
  },
  {
    title: "BSC (Token)", 
    value: "0x25b24b3c47918b7962b3e49c4f468367f73cc0e0",
    link: "https://bscscan.com/token/0x25b24b3c47918b7962b3e49c4f468367f73cc0e0"
  },
  {
    title: "ETH (Pre-sale)", 
    value: "0x448781811b915fD9A32D93244eE80A7a457EEd61",
    link: "https://etherscan.io/address/0x448781811b915fD9A32D93244eE80A7a457EEd61"
  },
  {
    title: "BSC (Pre-sale)", 
    value: "0xcceAEB37ff60D83041b7c9f7E4F11f17Ca3F4e95",
    link: "https://bscscan.com/address/0xcceAEB37ff60D83041b7c9f7E4F11f17Ca3F4e95"
  }
]

export default function Contracts({open, handleClose}) {

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      BackdropProps={{style: {backgroundColor: 'rgba(32, 38, 45, 0.2)', backdropFilter: 'blur(2px)'}}}
      PaperProps={{
        style: { borderRadius: 25, boxShadow: 'none' }
      }}
      fullWidth
    >
      <DialogTitle id="alert-dialog-title" sx={{p: 3}}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
          <Typography variant="h6" sx={{fontWeight: 500}}>
            Contracts
          </Typography>
          <IconButton onClick={handleClose} aria-label="close" sx={{bgcolor: 'grey.100'}}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        {contracts.map((contract, i) => (
          <Stack direction="row" mb={2} key={i} justifyContent="space-between" spacing={3}>
            <Box>
              <Typography variant="h6" color="text.secondary" sx={{fontWeight: 500, mb: 1}}>
              {contract.title}
              </Typography>
              <Link 
                href={contract.link} 
                underline="none" 
                target="_blank" 
                rel="noreferrer"
                sx={{fontWeight: 500}}
              >
                {contract.value}
              </Link>
            </Box>
            <Box sx={{alignSelf: 'end'}}>
              <CopyToClipboard text={contract.value} />
            </Box>
          </Stack>
        ))}
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}