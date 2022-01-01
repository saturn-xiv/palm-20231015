import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import TextField from '@mui/material/TextField';
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
      submitText={intl.formatMessage({ id: 'users.confirm.submit' })}
      title={intl.formatMessage({ id: 'users.confirm.title' })}
      icon={<ConfirmationNumberOutlinedIcon />}
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
    </ApplicationForm>
  );
};
