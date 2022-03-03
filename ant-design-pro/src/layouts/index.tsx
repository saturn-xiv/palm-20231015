import Application from './Application';
import Dashboard from './Dashboard';

export default (props: any) => {
  if (
    [
      '/install',
      '/users/sign-in',
      '/users/sign-up',
      '/users/confirm',
      '/users/unlock',
      '/users/forgot-password',
      '/leave-words/new',
      '/switch-language',
    ].includes(props.location.pathname)
  ) {
    return <Application {...props} />;
  }
  return <Dashboard {...props} />;
};