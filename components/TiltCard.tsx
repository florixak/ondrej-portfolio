type TiltCardProps = {
  title: string;
  description: string;
  image: string;
  children: React.ReactNode;
  className?: string;
};

const TiltCard = ({
  title,
  description,
  image,
  children,
  className,
}: TiltCardProps) => {
  return <article>{children}</article>;
};

export default TiltCard;
