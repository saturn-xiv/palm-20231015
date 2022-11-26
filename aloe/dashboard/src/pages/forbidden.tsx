import unauthorised_svg from "../assets/unauthorised.svg";
import ErrorPage from "../components/Error";

const Widget = () => {
  return <ErrorPage title="pages.forbidden.title" image={unauthorised_svg} />;
};

export default Widget;
