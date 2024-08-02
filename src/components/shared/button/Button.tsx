import { EButtonVariants } from "@enums";
import { Button as MuiButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ButtonProps {
  variant?: EButtonVariants;
  text: string;
}

const Button = ({ variant = EButtonVariants.CONTAINED, text }: ButtonProps) => {
  const theme = useTheme();

  return (
    <MuiButton
      variant={variant}
      sx={{
        fontWeight: "bold",
        fontFamily: theme.typography.fontFamily,
      }}>
      {text}
    </MuiButton>
  );
};

export default Button;
