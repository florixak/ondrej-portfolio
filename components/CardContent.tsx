import { Button } from "./ui/button";

type CardContentProps = {
  title: string;
  description: string;
  image: React.ReactNode;
};

const CardContent = ({ title, description, image }: CardContentProps) => {
  return (
    <div className="relative flex flex-col p-4 gap-4 bg-background h-full rounded-lg items-center justify-center overflow-hidden">
      <div className="mb-10 md:mb-0">{image}</div>

      <div className="absolute flex flex-col gap-2 bottom-0">
        <h2 className="text-2xl font-bold md:translate-y-10 md:group-hover:translate-y-0 transition-transform duration-400 ease-in-out text-center">
          {title}
        </h2>

        <div className="group-hover:flex-col gap-4 mb-5 md:group-hover:opacity-100 md:opacity-0 transition-all duration-500 ease-in-out group-hover:items-start group-hover:justify-center">
          <p className="text-sm text-muted-foreground max-w-[15rem]">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 -translate-y-3 md:translate-y-10 md:group-hover:-translate-y-3 md:group-hover:opacity-100 md:opacity-0 transition-all duration-400 ease-in-out">
          <Button variant="outline" className="cursor-pointer">
            Click To View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
