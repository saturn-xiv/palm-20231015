import { Helmet, useModel } from 'umi';

interface IProps {
  title: string;
}

const Widget = (props: IProps) => {
  const { initialState } = useModel('@@initialState');
  return (
    <Helmet>
      <title>
        {props.title} | {initialState?.layout.subhead} |
        {initialState?.layout.title}
      </title>
    </Helmet>
  );
};

export default Widget;
