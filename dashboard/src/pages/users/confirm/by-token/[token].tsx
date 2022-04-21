import { useParams } from 'umi';

interface IParam {
  token: string;
}
const Widget = () => {
  const params = useParams<IParam>();
  return <div>confirm by token {params.token}</div>;
};

export default Widget;
