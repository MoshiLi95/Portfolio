"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface ExtendedDocument extends Document {
  startViewTransition?: any;
}

export default function useAnimatedRouter() {
  const router = useRouter();
  const viewTransitionsStatus = useCallback(() => {
    const extendedDocument =
      typeof document !== "undefined" ? (document as ExtendedDocument) : "";

    let status = "Opss, Your browser doesn't support View Transitions API";
    if (extendedDocument && extendedDocument?.startViewTransition) {
      status = "Yess, Your browser support View Transitions API";
    }
    return status;
  }, []);
  // Navigate to the new route
  const animatedRoute = (url: string) => {
    const extendedDocument = document as ExtendedDocument;
    if (!extendedDocument.startViewTransition) {
      return router.push(url);
    } else {
      extendedDocument.startViewTransition(async () => {
        return router.push(url);
      });
    }
  };
  return { animatedRoute, viewTransitionsStatus };
}
