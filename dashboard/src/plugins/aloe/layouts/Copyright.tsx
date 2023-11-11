import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

const Widget = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 5 }}
    >
      <Link color="inherit" href="https://github.com/saturn-xiv/palm">
        <GitHubIcon sx={{ fontSize: 12 }} />
      </Link>
      &nbsp; &copy;2019~{new Date().getFullYear()}
    </Typography>
  );
};

export default Widget;
