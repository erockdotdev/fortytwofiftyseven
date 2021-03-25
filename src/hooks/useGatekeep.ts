import { useEffect } from "react";
import { VERCEL_GIT_COMMIT_REFS } from "../../config/env.config";

// Totally unsafe way to password protect deployed versions but
// it's simple enough for now

function displayPasswordPrompt(
  hasAccess: boolean,
  blockEnv: boolean,
  environment: string
): void {
  if (!hasAccess && blockEnv) {
    const secret = prompt("Password");
    if (secret !== process.env.NEXT_PUBLIC_LOGIN_SECRET) {
      displayPasswordPrompt(hasAccess, blockEnv, environment);
      return;
    }
    localStorage.setItem(`${environment}-access`, `${true}`);
    return;
  }
}

export default function gatekeep(environment: string) {
  useEffect(() => {
    if (!process.browser) return;
    const hasAccess = !!localStorage.getItem(`${environment}-access`) || false;
    const blockEnv =
      process.env.NEXT_PUBLIC_ENVIRONMENT_PASSWORD_PROTECT?.includes(
        environment
      ) || false;
    displayPasswordPrompt(hasAccess, blockEnv, environment);
  }, [environment]);
}
