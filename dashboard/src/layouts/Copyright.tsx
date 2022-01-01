import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';

export default () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 8, mb: 4 }}
    >
      <Link
        color="inherit"
        href="https://github.com/saturn-xiv/palm/blob/main/LICENSE"
        target="_blank"
      >
        <CopyrightOutlinedIcon />
      </Link>
      <Link color="inherit" href="/" target="_blank">
        <HomeOutlinedIcon />
      </Link>
      <Link
        color="inherit"
        href="https://github.com/saturn-xiv/palm"
        target="_blank"
      >
        <CodeOutlinedIcon />
      </Link>
    </Typography>
  );
};
