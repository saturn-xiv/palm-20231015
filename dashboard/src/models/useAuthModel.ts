import { useState, useCallback } from 'react';

interface IUser {
  uid: string;
  realName: string;
  avatar: string;
  lang: string;
  timeZone: string;
}

interface ISideBarItem {
  to: string;
}

export default function useAuthModel() {
  const [user, setUser] = useState(null);

  const sign_in = useCallback((account: string, password: string) => {
    console.log('sign in', account, password);
    // signin implementation
    // setUser(user from signin API)
  }, []);

  const sign_out = useCallback(() => {
    console.log('sign out');
    // signout implementation
    // setUser(null)
  }, []);

  return {
    user,
    sign_in,
    sign_out,
  };
}
