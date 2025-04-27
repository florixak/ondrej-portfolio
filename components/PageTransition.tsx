"use client";

import { usePathname } from "@/i18n/routing";
import { useEffect, useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showTransition, setShowTransition] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    setShowTransition(true);
    setIsPageVisible(false);

    const timeout = setTimeout(() => {
      setShowTransition(false);
      setIsPageVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showTransition && (
          <m.div
            key={pathname}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-background flex items-center justify-center z-[60]"
          >
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-green"></div>
          </m.div>
        )}
      </AnimatePresence>
      {isPageVisible && <div>{children}</div>}
    </>
  );
}
