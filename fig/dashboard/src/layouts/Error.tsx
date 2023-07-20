import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

interface IProps {
  title: string;
  description: string;
  logo: string;
}

const Widget = ({ title, description, logo }: IProps) => {
  const navigate = useNavigate();
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
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography align="center" color="textPrimary" variant="h1">
            {title}
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
            {description}
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <img
              alt={title}
              src={logo}
              style={{
                marginTop: 50,
                display: "inline-block",
                maxWidth: "100%",
                width: 560,
              }}
            />
          </Box>

          <Button
            component="a"
            onClick={() => {
              navigate(-1);
            }}
            startIcon={<ArrowBackIcon fontSize="small" />}
            sx={{ mt: 3 }}
            variant="contained"
          >
            {/* TODO */}
            Go back to dashboard
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Widget;
