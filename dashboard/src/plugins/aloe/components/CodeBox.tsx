interface IProps {
  title: string;
  body: string;
}

const Widget = ({ title, body }: IProps) => {
  return (
    <fieldset>
      <legend>{title}</legend>
      <pre style={{ whiteSpace: "pre-wrap" }}>{body}</pre>
    </fieldset>
  );
};

export default Widget;
