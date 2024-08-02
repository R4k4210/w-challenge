import { useState } from "react";
import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Button from "@shared/button";
import useAllowance from "@hooks/useAllowance";

interface Erc20TransferProps {
  name: string;
  address: string;
  formatUnits: number;
}

const Erc20Transfer = ({ name, address, formatUnits }: Erc20TransferProps) => {
  const theme = useTheme();

  const { allowance, balance, isLoading } = useAllowance(address, formatUnits);

  const [amount, setAmount] = useState("");

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
          <TextField label="" variant="outlined" onChange={handleChange} />
        </Grid>
        <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button>Approve</Button>
          <Button>Transfer</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Erc20Transfer;
