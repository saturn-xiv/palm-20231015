import {
  GithubOutlined,
  HomeOutlined,
  DashboardOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { LANGUAGES } from "../locales";

export const Home = () => (
  <HomeOutlined
    key="home"
    onClick={(ev) => {
      ev.preventDefault();
      window.open("/", "_blank");
    }}
  />
);
export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <DashboardOutlined
      onClick={(ev) => {
        ev.preventDefault();
        navigate("/");
      }}
    />
  );
};

export const Github = () => {
  return (
    <GithubOutlined
      onClick={(ev) => {
        ev.preventDefault();
        window.open("https://github.com/saturn-xiv/palm", "_blank");
      }}
      key="github"
    />
  );
};

export const SwitchLanguage = () => {
  const navigate = useNavigate();
  return LANGUAGES.length > 1 ? (
    <GlobalOutlined
      onClick={(ev) => {
        ev.preventDefault();
        navigate("/switch-language");
      }}
    />
  ) : (
    <></>
  );
};
