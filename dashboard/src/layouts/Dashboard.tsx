export interface IProps {
  children: React.ReactNode;
}

export default ({ children }: IProps) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>{children}</div>
      <div>aaa</div>
    </div>
  );
};
