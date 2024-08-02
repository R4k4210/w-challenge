import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { networks } from "@constants";
import AppBar from "@shared/app-bar";
import PageContainer from "@shared/page-container";
import TargetWallet from "./components/target-wallet";
import Erc20Transfer from "./components/erc20-transfer";

const Home = () => {
  const theme = useTheme();

  return (
    <PageContainer backgroundColor={theme.palette.primary.dark}>
      <AppBar />

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        gap={2}
        p={2}>
        <TargetWallet />

        <Grid
          container
          item
          direction="row"
          justifyContent="center"
          gap={2}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
          }}>
          {networks.map((network) => (
            <Erc20Transfer key={network.name} name={network.name} address={network.address} />
          ))}
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Home;
