import Layout from "../layouts/Error";
import logo from "../assets/undraw_page_not_found.svg";

const Widget = () => {
  // TODO
  const title = "404: The page you are looking for isn’t here";
  const description =
    "You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation";
  return <Layout title={title} description={description} logo={logo} />;
};

export default Widget;
