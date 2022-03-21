import moment from "moment";

import { Editor } from "../plugins";
interface ITimestampProps {
  value: number;
}
export const Timestamp = ({ value }: ITimestampProps) => {
  return <span>{moment.unix(value).toString()}</span>;
};

interface IShowPageContentProps {
  editor: Editor;
  body: string;
}

export const ShowPageContent = ({ editor, body }: IShowPageContentProps) => {
  switch (editor) {
    // TODO
    default:
      return <pre>{body}</pre>;
  }
};
