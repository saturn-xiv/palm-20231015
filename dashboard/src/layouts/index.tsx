import Application from './application';
import Dashboard from './Dashboard';

export default (props: any) => {
  // console.log(props.location, props.match.isExact);

  if (
    [
      '/install',
      '/users/sign-in',
      '/users/sign-up',
      '/users/confirm',
      '/users/unlock',
      '/users/forgot-password',
    ].includes(props.location.pathname)
  ) {
    return <Application {...props} />;
  }
  return <Dashboard {...props} />;
};
