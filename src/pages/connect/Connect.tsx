import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PageContainer from "@shared/page-container";
import MainTitle from "@elements/main-title";
import ConnectButton from "@shared/connect-button";
import useConnectedAddrress from "@hooks/useConnection";

const Connect = () => {
  const theme = useTheme();
  useConnectedAddrress();

  return (
    <PageContainer backgroundColor={theme.palette.primary.dark}>
      <Grid container direction="column" justifyContent="center" alignItems="center" height="100%">
        <Grid item mb={10}>
          <MainTitle
            text="DApp Challenge"
            color={theme.palette.primary.contrastText}
            size={theme.typography.h1.fontSize}
            family={theme.typography.fontFamily}
          />
        </Grid>
        <Grid item>
          <ConnectButton />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Connect;
