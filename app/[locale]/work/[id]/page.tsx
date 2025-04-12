import { getProjectById } from "@/actions/actions";
import React from "react";

const WorkInfoPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const project = await getProjectById(id);

  return (
    <section>
      <div className="flex-center flex-col gap-4 p-4">
        <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
        <p className="mt-2 text-sm">{project.description}</p>
        <p className="mt-2 text-sm">
          Technologies: {project.technologies.join(", ")}
        </p>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
};

export default WorkInfoPage;
