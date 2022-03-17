import moment from "moment";

interface ITimestampProps {
  value: Date;
}
export const Timestamp = ({ value }: ITimestampProps) => {
  return <span>{moment(value).toString()}</span>;
};
