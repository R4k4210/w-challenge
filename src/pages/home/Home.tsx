import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { networks } from "@constants";
import PageContainer from "@shared/page-container";
import TargetWallet from "./components/target-wallet";
import Erc20Transfer from "./components/erc20-transfer";
import WrongNetwork from "./components/wrong-network";

const Home = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <PageContainer backgroundColor={theme.palette.primary.dark}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        height={isDesktop ? "100%" : "auto"}
        maxWidth="800px"
        margin="0 auto"
        gap={2}
        p={2}
        pt={5}>
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
          {networks.map(({ name, address, formatUnits }) => (
            <Erc20Transfer key={name} name={name} contract={address} formatUnits={formatUnits} />
          ))}
        </Grid>

        <WrongNetwork />
      </Grid>
    </PageContainer>
  );
};

export default Home;
