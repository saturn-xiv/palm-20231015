import { TO_PROFILE, TO_SIGN_IN } from '@/models/useAuthModel';
import { useEffect } from 'react';
import { useModel, useHistory } from 'umi';

const Widget = () => {
  const { initialState } = useModel('@@initialState');
  const history = useHistory();
  useEffect(() => {
    history.push(initialState?.currentUser ? TO_PROFILE : TO_SIGN_IN);
  }, [initialState, history]);

  return <></>;
};

export default Widget;
