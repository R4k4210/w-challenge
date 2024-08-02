import { Typography } from "@mui/material";

interface MainTitleProps {
  text: string;
  color: string;
  family: string | undefined;
  size: number | string | undefined;
}

const MainTitle = ({ text, color, family, size }: MainTitleProps) => {
  return (
    <Typography
      variant="h1"
      sx={{
        textAlign: "center",
        color: color,
        fontFamily: family,
        fontSize: size,
      }}>
      {text}
    </Typography>
  );
};

export default MainTitle;
