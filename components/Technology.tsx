const Technology = ({ technology }: { technology: string }) => {
  return (
    <li
      key={technology}
      className="text-sm bg-muted px-2 py-1 rounded-md text-foreground"
    >
      {technology}
    </li>
  );
};

export default Technology;
