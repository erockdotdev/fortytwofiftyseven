if(!fs){
    require("dotenv").config();
}


const VERCEL_GIT_COMMIT_REFS = {
  DEVELOP: "develop",
  STAGING: "staging",
  MASTER: "master",
  LOCAL: "local",
};
// get value from Vercel env var or of local and therefore undefined set to local
const currentEnv =
  process.env.VERCEL_GIT_COMMIT_REF || VERCEL_GIT_COMMIT_REFS.LOCAL;

function getEnvironmentVariables() {
  const ENV_VARS = {};
  const isDevelop =
    currentEnv === VERCEL_GIT_COMMIT_REFS.DEVELOP ||
    currentEnv === VERCEL_GIT_COMMIT_REFS.LOCAL;
  // Client environment variables
  ENV_VARS.NEXT_PUBLIC_GRAPHQL_URI = isDevelop
    ? process.env.NEXT_PUBLIC_GRAPHQL_URI_DEVELOP
    : process.env.NEXT_PUBLIC_GRAPHQL_URI;
  ENV_VARS.NEXT_PUBLIC_PERSIST_KEY = isDevelop
    ? process.env.NEXT_PUBLIC_PERSIST_KEY_DEVELOP
    : process.env.NEXT_PUBLIC_PERSIST_KEY;
  ENV_VARS.NEXT_PUBLIC_REST_AUTH_URI = isDevelop
    ? process.env.NEXT_PUBLIC_REST_AUTH_URI_DEVELOP
    : process.env.NEXT_PUBLIC_REST_AUTH_URI;
  // Server environment variables
  ENV_VARS.CORS_ANYWHERE_IP = isDevelop
    ? process.env.CORS_ANYWHERE_IP_DEVELOP
    : process.env.CORS_ANYWHERE_IP;
  ENV_VARS.CORS_ANYWHERE_PORT = isDevelop
    ? process.env.CORS_ANYWHERE_PORT_DEVELOP
    : process.env.CORS_ANYWHERE_PORT;
  ENV_VARS.ADOBE_TAG_MANAGER_ID = isDevelop
    ? process.env.ADOBE_TAG_MANAGER_ID_DEVELOP
    : process.env.ADOBE_TAG_MANAGER_ID;

  console.log("ENV_VARS", ENV_VARS);

  return ENV_VARS;
}

module.exports = getEnvironmentVariables;
