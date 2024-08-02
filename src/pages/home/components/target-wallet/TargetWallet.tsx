import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { setTargetAddress } from "@slices/targetSlice";
import { toast } from "react-toastify";
import useAddressValidation from "@hooks/useAddressValidation";
import Button from "@shared/button";

const TargetWallet = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const ref = useRef<HTMLInputElement>(null);

  const { validateAddress } = useAddressValidation();

  const [receiver, setReceiver] = useState("");

  const clearTargetWallet = () => {
    dispatch(setTargetAddress(null));
    setReceiver("");
  };

  const setTargetWallet = () => {
    const validAddress = validateAddress(receiver);

    if (!validAddress) {
      toast.error("Invalid Address, please try again");
      ref.current?.focus();
      return;
    }

    toast.success("Wallet set successfully");
    dispatch(setTargetAddress(receiver.trim()));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReceiver(event.target.value);
  };

  return (
    <Box component={Paper} width="100%" elevation={2} p={2}>
      <Grid container direction="row" alignItems="center" gap={2}>
        <Grid item xs="auto">
          <Typography variant="body1" color={theme.palette.primary.main}>
            Target Wallet
          </Typography>
        </Grid>
        <Grid item flexGrow={1}>
          <TextField
            inputRef={ref}
            fullWidth
            label=""
            variant="outlined"
            onChange={handleChange}
            value={receiver}
          />
        </Grid>
        <Grid item>
          <Button onClick={setTargetWallet}>Set</Button>
        </Grid>
        <Grid item>
          <Button onClick={clearTargetWallet}>Clear</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TargetWallet;
