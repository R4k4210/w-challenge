import { useRef, useState } from "react";
import { RootState } from "@config/store";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Paper, TextField, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { setTargetAddress } from "@slices/targetSlice";
import { toast } from "react-toastify";
import useAddressValidation from "@hooks/useAddressValidation";
import Button from "@shared/button";

const TargetWallet = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const isValidChain = useSelector((state: RootState) => state.account.isValidChain);
  const targetAddress = useSelector((state: RootState) => state.target.address);
  const address = useSelector((state: RootState) => state.account.address);

  const ref = useRef<HTMLInputElement>(null);

  const { validateAddress } = useAddressValidation();

  const [receiver, setReceiver] = useState("");

  const clearTargetWallet = () => {
    dispatch(setTargetAddress(null));
  };

  const setTargetWallet = () => {
    const validAddress = validateAddress(receiver);

    if (!validAddress) {
      toast.error("Invalid Address, please try again");
      ref.current?.focus();
      return;
    }

    if (receiver.trim() === address) {
      toast.error("Target address cannot be the same as current address");
      return;
    }

    toast.success("Wallet set successfully");
    dispatch(setTargetAddress(receiver.trim()));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReceiver(event.target.value);
  };

  return (
    <Box
      component={Paper}
      width="100%"
      elevation={2}
      p={2}
      minHeight={92}
      data-testid="target-wallet">
      <Grid
        container
        direction={isDesktop ? "row" : "column"}
        flexWrap="nowrap"
        alignItems="center"
        gap={2}
        height="100%">
        <Grid item xs="auto">
          <Typography variant="body1" color={theme.palette.primary.main}>
            Target Wallet
          </Typography>
        </Grid>
        <Grid
          item
          flexGrow={1}
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            width: "100%",
          }}>
          {!targetAddress ? (
            <TextField
              data-testid="target-wallet-input"
              inputRef={ref}
              fullWidth
              label=""
              variant="outlined"
              onChange={handleChange}
              value={receiver}
            />
          ) : (
            <Typography
              variant="body1"
              color={theme.palette.primary.main}
              sx={{ textAlign: "center" }}>
              {targetAddress}
            </Typography>
          )}
        </Grid>

        <Grid item sx={{ flexGrow: 1, display: "flex", gap: 2, justifyContent: "space-between" }}>
          <Button
            disabled={!isValidChain || !!targetAddress}
            minWidth={90}
            onClick={setTargetWallet}>
            Set
          </Button>

          <Button disabled={!isValidChain} minWidth={90} onClick={clearTargetWallet}>
            Clear
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TargetWallet;
