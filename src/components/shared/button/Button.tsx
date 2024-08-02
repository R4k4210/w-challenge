import { EButtonVariants } from "@enums";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ButtonProps extends MuiButtonProps {
  variant?: EButtonVariants;
  children?: React.ReactNode;
}

const Button = ({ variant = EButtonVariants.CONTAINED, children, ...rest }: ButtonProps) => {
  const theme = useTheme();

  return (
    <MuiButton
      {...rest}
      variant={variant}
      sx={{
        fontWeight: "bold",
        fontFamily: theme.typography.fontFamily,
      }}>
      {children}
    </MuiButton>
  );
};

export default Button;
