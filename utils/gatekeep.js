import { useEffect } from "react";
import { VERCEL_GIT_COMMIT_REFS } from "../config/env.config";

export default function gatekeep(environment) {
  useEffect(() => {
    if (!process.browser) return;
    const hasAccess = localStorage.getItem(`${environment}-access`) || false;
    const allowEnv =
      environment === VERCEL_GIT_COMMIT_REFS.MASTER ||
      environment === VERCEL_GIT_COMMIT_REFS.LOCAL;

    function blockAccess() {
      if (!hasAccess && !allowEnv) {
        var password = prompt("Password");
        if (password !== "lfg") {
          return blockAccess();
        }
        return localStorage.setItem(`${environment}-access`, true);
      }
    }
    blockAccess();
  }, [environment]);
}
