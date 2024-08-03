import { Box } from "@mui/material";

interface PageContainerProps {
  backgroundColor: string;
  layoutContainer?: boolean;
  children?: React.ReactNode;
}

const PageContainer = ({
  backgroundColor,
  layoutContainer = true,
  children,
}: PageContainerProps) => {
  return (
    <Box
      sx={{
        minHeight: layoutContainer ? "calc(100vh - 64px)" : "100vh",
        backgroundColor: backgroundColor,
        display: "grid",
        placeItems: "center",
      }}>
      {children}
    </Box>
  );
};

export default PageContainer;
