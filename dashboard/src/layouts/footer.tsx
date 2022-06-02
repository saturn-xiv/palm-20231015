import {
  GithubOutlined,
  HomeOutlined,
  DashboardOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import { useHistory, useModel } from 'umi';

export const Copyright = () => {
  const { initialState } = useModel('@@initialState');
  return <>&copy;{initialState?.layout.copyright}</>;
};

export const Home = () => (
  <HomeOutlined
    key="home"
    onClick={(ev) => {
      ev.preventDefault();
      window.open('/', '_blank');
    }}
  />
);
export const Dashboard = () => {
  const history = useHistory();
  return (
    <DashboardOutlined
      onClick={(ev) => {
        ev.preventDefault();
        history.push('/');
      }}
    />
  );
};

export const Github = () => {
  return (
    <GithubOutlined
      onClick={(ev) => {
        ev.preventDefault();
        window.open('https://github.com/saturn-xiv/palm', '_blank');
      }}
      key="github"
    />
  );
};

export const SwitchLanguage = () => {
  const history = useHistory();
  return (
    <GlobalOutlined
      onClick={(ev) => {
        ev.preventDefault();
        history.push('/switch-language');
      }}
    />
  );
};
