import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PageContainer from "@shared/page-container";
import Button from "@shared/button";
import MainTitle from "@elements/main-title";

const Connect = () => {
  const theme = useTheme();

  return (
    <PageContainer backgroundColor={theme.palette.primary.dark}>
      <Grid container direction="column" justifyContent="center" alignItems="center" height="100%">
        <Grid item mb={10}>
          <MainTitle
            text="Wonderland Challenge"
            color={theme.palette.primary.contrastText}
            size={theme.typography.h1.fontSize}
            family={theme.typography.fontFamily}
          />
        </Grid>
        <Grid item>
          <Button text="Connect Wallet" />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Connect;
