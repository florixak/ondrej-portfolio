"use client";
import useOnlineStatus from "@/hooks/useOnlineStatus";
import { motion as m } from "framer-motion";

export default function OfflineBanner() {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
      role="alert"
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-red-500 p-4 text-white text-center"
    >
      You are currently offline.
    </m.div>
  );
}
