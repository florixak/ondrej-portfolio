import React from "react";

const WorkInfoPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return <div>{slug}</div>;
};

export default WorkInfoPage;
