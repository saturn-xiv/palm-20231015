import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useIntl } from 'umi';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

import ApplicationForm from '../layouts/application/Form';

export default () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const intl = useIntl();
  return (
    <ApplicationForm
      submitText={intl.formatMessage({ id: 'buttons.submit' })}
      title={intl.formatMessage({ id: 'users.install.title' })}
      icon={<HowToRegOutlinedIcon />}
      handleSubmit={handleSubmit}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="nick_name"
        label={intl.formatMessage({ id: 'attributes.nick-name' })}
        name="nick_name"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label={intl.formatMessage({ id: 'attributes.email' })}
        name="email"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="real_name"
        label={intl.formatMessage({ id: 'attributes.real-name' })}
        name="real_name"
      />

      <TextField
        margin="normal"
        required
        fullWidth
        id="password"
        label={intl.formatMessage({ id: 'attributes.password' })}
        name="password"
        type="password"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="password_confirmation"
        label={intl.formatMessage({ id: 'attributes.password-confirmation' })}
        name="password_confirmation"
        type="password"
      />
      <FormControlLabel
        control={<Checkbox value="allow_extra_emails" color="primary" />}
        label={intl.formatMessage({ id: 'users.sign-up.allow-extra-emails' })}
      />
    </ApplicationForm>
  );
};
