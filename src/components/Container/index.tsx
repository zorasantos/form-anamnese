type childrenProps = {
  children: React.ReactNode;
};
const Container = ({ children }: childrenProps) => {
  return <div className="grid grid-cols-4 grid-rows-2">{children}</div>;
};

export default Container;
