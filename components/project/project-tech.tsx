import { Project } from "@/types/types";
import Technology from "../Technology";

type ProjectTechProps = {
  technologies: Project["technologies"];
};

const ProjectTech = ({ technologies }: ProjectTechProps) => {
  return (
    <ul className="flex justify-center gap-2 flex-wrap mt-2 max-w-xl">
      {technologies.map((technology) => (
        <Technology key={technology} technology={technology} />
      ))}
    </ul>
  );
};

export default ProjectTech;
