import Layout from "../layouts/Error";
import logo from "../assets/unauthorised.svg";

const Widget = () => {
  // TODO
  const title = "forbidden";
  const description = "403";
  return <Layout title={title} description={description} logo={logo} />;
};

export default Widget;
