import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useIntl } from 'umi';

import ApplicationForm from '../../layouts/application/Form';

export default () => {
  const intl = useIntl();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ApplicationForm
      submitText={intl.formatMessage({ id: 'buttons.submit' })}
      title={intl.formatMessage({ id: 'users.sign-in.title' })}
      icon={<LockOutlinedIcon />}
      handleSubmit={handleSubmit}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label={intl.formatMessage({ id: 'attributes.email' })}
        name="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label={intl.formatMessage({ id: 'attributes.password' })}
        type="password"
        id="password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label={intl.formatMessage({ id: 'attributes.remember-me' })}
      />
    </ApplicationForm>
  );
};
