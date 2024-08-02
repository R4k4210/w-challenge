import { AppBar as MuiAppBar, Box, Toolbar } from "@mui/material";
import ConnectButton from "@shared/connect-button";

const AppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static" sx={{ backgroundColor: "primary.dark" }}>
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <ConnectButton />
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

export default AppBar;
