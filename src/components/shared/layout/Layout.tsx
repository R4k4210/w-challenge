import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import useCheckCurrentChain from "@hooks/useCheckCurrentChain";
import AppBar from "@shared/app-bar";

const Layout = () => {
  useCheckCurrentChain();

  return (
    <Box>
      <AppBar />
      <Outlet />
    </Box>
  );
};

export default Layout;
