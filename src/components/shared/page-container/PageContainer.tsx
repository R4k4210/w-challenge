import { Box } from "@mui/material";

interface PageContainerProps {
  backgroundColor: string;
  children?: React.ReactNode;
}

const PageContainer = ({ backgroundColor, children }: PageContainerProps) => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: backgroundColor,
      }}>
      {children}
    </Box>
  );
};

export default PageContainer;
