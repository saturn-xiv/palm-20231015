import not_found_svg from "../assets/404.svg";
import ErrorPage from "../components/Error";

const Widget = () => {
  return <ErrorPage title="pages.not-found.title" image={not_found_svg} />;
};

export default Widget;
