export const MainContent = ({ children }: Props) => {
  return <div className="mt-4 mb-4">{children}</div>;
};

interface Props {
  children: JSX.Element;
}
