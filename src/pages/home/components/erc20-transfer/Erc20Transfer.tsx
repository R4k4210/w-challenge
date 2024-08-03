import { RootState } from "@config/store";
import { useSelector } from "react-redux";
import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useReadContractsData from "@hooks/useReadContractsData";
import Button from "@shared/button";
import useWriteOnContracts from "@hooks/useWriteOnContracts";

interface Erc20TransferProps {
  name: string;
  contract: string;
  formatUnits: number;
}

const Erc20Transfer = ({ name, contract, formatUnits }: Erc20TransferProps) => {
  const theme = useTheme();
  const isValidChain = useSelector((state: RootState) => state.account.isValidChain);
  const targetAddress = useSelector((state: RootState) => state.target.address);

  const { allowance, balance, isLoading } = useReadContractsData(contract, formatUnits);
  const {
    amount,
    setAmount,
    approve,
    transfer,
    isLoading: isLoadingTransaction,
    isPending,
  } = useWriteOnContracts(contract, formatUnits);

  const loading = isLoading || isLoadingTransaction || isPending;

  const disabledButtons = !isValidChain || !targetAddress;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  return (
    <Box component={Paper} width="100%" elevation={2} p={2}>
      <Grid container direction="column" gap={2}>
        <Grid item textAlign="center">
          <Typography variant="h6" color={theme.palette.primary.main}>
            {name}
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <Box component="span" width="100px" mr={2}>
            <Typography variant="body1" color={theme.palette.primary.main}>
              Balance
            </Typography>
          </Box>
          <Box component="span">
            <Typography variant="body1" color={theme.palette.primary.main}>
              {isLoading ? "Loading..." : balance}
            </Typography>
          </Box>
        </Grid>
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <Box component="span" width="100px" mr={2}>
            <Typography variant="body1" color={theme.palette.primary.main}>
              Allowance
            </Typography>
          </Box>
          <Box component="span">
            <Typography variant="body1" color={theme.palette.primary.main}>
              {isLoading ? "Loading..." : allowance}
            </Typography>
          </Box>
        </Grid>
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <Box component="span" width="100px" mr={2}>
            <Typography variant="body1" color={theme.palette.primary.main}>
              Amount
            </Typography>
          </Box>
          <TextField type="number" value={amount} variant="outlined" onChange={handleChange} />
        </Grid>
        <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button disabled={disabledButtons} isLoading={isLoading} minWidth={120} onClick={approve}>
            Approve
          </Button>
          <Button disabled={disabledButtons} isLoading={loading} minWidth={120} onClick={transfer}>
            Transfer
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Erc20Transfer;
