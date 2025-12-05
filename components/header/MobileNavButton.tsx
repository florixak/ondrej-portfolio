"use client";

import { Menu } from "lucide-react";
import { Button } from "../ui/button";

type MobileNavButtonProps = {
  handleOpenMenu: () => void;
};

const MobileNavButton = ({ handleOpenMenu }: MobileNavButtonProps) => {
  return (
    <Button variant="outline" onClick={handleOpenMenu} className="z-60">
      <Menu />
    </Button>
  );
};

export default MobileNavButton;
