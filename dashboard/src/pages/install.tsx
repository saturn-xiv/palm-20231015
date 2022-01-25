import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useIntl } from 'umi';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import { useForm, Controller } from 'react-hook-form';
import { useRef } from 'react';

import ApplicationForm from '../layouts/application/Form';
import { validators } from '../config';

interface IForm {
  nickName: string;
  realName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  allowExtraEmails: boolean;
}

export default () => {
  const {
    control,
    formState: { errors },
    register,
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      nickName: '',
      realName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      allowExtraEmails: false,
    },
  });
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = (data: IForm) => {
    console.log(data);
  };

  const intl = useIntl();
  return (
    <ApplicationForm
      submitText={intl.formatMessage({ id: 'buttons.submit' })}
      title={intl.formatMessage({ id: 'install.title' })}
      icon={<HowToRegOutlinedIcon />}
      handleSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="nickName"
        control={control}
        render={({ field }) => (
          <TextField
            margin="normal"
            fullWidth
            label={intl.formatMessage({ id: 'attributes.nick-name' })}
            autoFocus
            error={errors.nickName != null}
            helperText={
              errors.nickName && intl.formatMessage({ id: 'helpers.nick-name' })
            }
            {...register('nickName', validators.nickName)}
            {...field}
          />
        )}
      />
      <Controller
        name="realName"
        control={control}
        render={({ field }) => (
          <TextField
            margin="normal"
            fullWidth
            label={intl.formatMessage({ id: 'attributes.real-name' })}
            error={errors.realName != null}
            helperText={
              errors.realName && intl.formatMessage({ id: 'helpers.real-name' })
            }
            {...register('realName', validators.realName)}
            {...field}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            margin="normal"
            fullWidth
            label={intl.formatMessage({ id: 'attributes.email' })}
            error={errors.email != null}
            helperText={
              errors.email && intl.formatMessage({ id: 'helpers.email' })
            }
            {...register('email', validators.email)}
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            margin="normal"
            fullWidth
            label={intl.formatMessage({ id: 'attributes.password' })}
            type="password"
            error={errors.password != null}
            helperText={
              errors.password && intl.formatMessage({ id: 'helpers.password' })
            }
            {...register('password', validators.password)}
            {...field}
          />
        )}
      />
      <Controller
        name="passwordConfirmation"
        control={control}
        render={({ field }) => (
          <TextField
            margin="normal"
            fullWidth
            label={intl.formatMessage({
              id: 'attributes.password-confirmation',
            })}
            type="password"
            error={errors.passwordConfirmation != null}
            helperText={
              errors.passwordConfirmation &&
              intl.formatMessage({ id: 'helpers.password-onfirmation' })
            }
            {...register('passwordConfirmation', {
              validate: (it) => it === password.current,
            })}
            {...field}
          />
        )}
      />

      <FormControlLabel
        control={
          <Controller
            name="allowExtraEmails"
            control={control}
            render={({ field }) => <Checkbox color="primary" {...field} />}
          />
        }
        label={intl.formatMessage({ id: 'users.sign-up.allow-extra-emails' })}
      />
    </ApplicationForm>
  );
};
