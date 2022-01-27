import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useIntl, history } from 'umi';

export interface IProps {
  title: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  icon: React.ReactNode;
  submitText: string;
}

interface ILinkItem {
  label: string;
  to: string;
}

export default ({
  children,
  submitText,
  icon,
  handleSubmit,
  title,
}: IProps) => {
  const intl = useIntl();
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>{icon}</Avatar>
      <Typography component="h1" variant="h5">
        {title}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        {children}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {submitText}
        </Button>
        <Grid container>
          {['sign-in', 'sign-up', 'forgot-password', 'confirm', 'unlock'].map(
            (it) => (
              <Grid
                onClick={() => {
                  history.push(`/users/${it}`);
                }}
                key={`users-shared-links-${it}`}
                item
                xs={12}
                md={6}
              >
                <Link variant="body2">
                  {intl.formatMessage({ id: `users.${it}.title` })}
                </Link>
              </Grid>
            ),
          )}
        </Grid>
      </Box>
    </Box>
  );
};
