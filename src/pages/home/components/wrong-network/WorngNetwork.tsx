import { useSelector } from "react-redux";
import { RootState } from "@config/store";
import { Box, Grid, Paper, PaperProps, Typography } from "@mui/material";
import { useSwitchChain, useChainId } from "wagmi";
import { useTheme } from "@mui/material/styles";
import Button from "@shared/button";

const WrongNetwork = () => {
  const theme = useTheme();
  const isValidChain = useSelector((state: RootState) => state.account.isValidChain);

  const { chains, switchChain } = useSwitchChain();
  const chainId = useChainId();
  const chain = chains.find((c) => c.id === chainId);

  const CustomPaper = (props: PaperProps) => {
    return (
      <Paper elevation={8} {...props} sx={{ backgroundColor: theme.palette.secondary.light }} />
    );
  };

  if (isValidChain) {
    return null;
  }

  return (
    <Box component={CustomPaper} width="100%" p={2}>
      <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h3">Wrong Network</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography variant="body1">Please switch to</Typography>
          <Button onClick={() => switchChain({ chainId })}>{chain?.name}</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WrongNetwork;
