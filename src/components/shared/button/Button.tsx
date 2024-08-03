import { Button as MuiButton, CircularProgress, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ButtonProps {
  disabled?: boolean;
  variant?: "contained" | "outlined" | "text";
  isLoading?: boolean;
  minWidth?: number;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  disabled = false,
  isLoading = false,
  variant = "contained",
  minWidth = 80,
  children,
  onClick,
}: ButtonProps) => {
  const theme = useTheme();

  const mapStatusToColor = {
    idle: theme.palette.primary.main,
    loading: theme.palette.primary.main,
    disabled: theme.palette.primary.disabled,
  };

  const getColor = () => {
    if (disabled) {
      return mapStatusToColor["disabled"];
    }

    if (isLoading) {
      return mapStatusToColor["loading"];
    }

    return mapStatusToColor["idle"];
  };

  return (
    <MuiButton
      variant={variant}
      disabled={disabled}
      onClick={!isLoading ? onClick : undefined}
      sx={{
        fontWeight: "bold",
        fontFamily: theme.typography.fontFamily,
        backgroundColor: `${getColor()} !important`,
        minWidth: minWidth,
      }}>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <CircularProgress size={30} sx={{ color: theme.palette.primary.contrastText }} />
        </Box>
      ) : (
        children
      )}
    </MuiButton>
  );
};

export default Button;
