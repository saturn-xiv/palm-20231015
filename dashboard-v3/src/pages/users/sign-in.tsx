import Layout from '@/layouts/non-sign-in';
import SignIn from '@/components/nut/users/SignIn';

const Widget = () => {
  return (
    <Layout title="nut.users.sign-in.title">
      <SignIn />
    </Layout>
  );
};

export default Widget;
