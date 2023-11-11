import { ReactNode } from "react";
import { Box, Container } from "@mui/material";

interface IProps {
  children: ReactNode;
}

const Widget = ({ children }: IProps) => {
  return (
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
      }}
    >
      <Container maxWidth="md">{children}</Container>
    </Box>
  );
};

export default Widget;
