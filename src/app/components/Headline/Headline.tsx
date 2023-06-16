export const Headline = ({ children }: Props) => {
  return <h2 className="text-lime-950 text-2xl">{children}</h2>;
};

interface Props {
  children: string;
}
