"use client";

import { useEffect, useState } from "react";
import { Kbd, KbdGroup } from "./ui/kbd";

const isMac = () =>
  typeof window !== "undefined" &&
  /Mac|iPhone|iPod|iPad/.test(navigator.platform);

const KbdInfo = () => {
  const [mac, setMac] = useState(false);

  useEffect(() => {
    setMac(isMac());
  }, []);

  return (
    <KbdGroup>
      <Kbd>{mac ? "⌘" : "Ctrl"}</Kbd>
      <span>+</span>
      <Kbd>K</Kbd>
    </KbdGroup>
  );
};

export default KbdInfo;
