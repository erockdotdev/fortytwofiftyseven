# Read Me

## Vercel Deployment

<https://vercel.com/erockdotdev/fortytwofiftyseven>

| environment | URL                                       | env vars |
| ----------- | ----------------------------------------- | -------- |
| production  | <https://fortytwofiftyseven.com/>         | prod     |
| staging     | <https://staging.fortytwofiftyseven.com>  | prod     |
| develop     | <https://develop.fortytwofiftyseven.com/> | develop  |

Vercel doesn't handle environment variables per environment. Their [official](https://vercel.com/support/articles/set-up-a-staging-environment-on-vercel) solution
is to create logic based off of the `VERCEL_GIT_COMMIT_REF` which when deployed will give us the git branch associated with a deploy environment. we should create separate develop environment values and logic based on `VERCEL_GIT_COMMIT_REF` to select the correct value.

so for example if we had the environment variable `NEXT_PUBLIC_CORS_ANYWHERE_IP` we would also set `NEXT_PUBLIC_CORS_ANYWHERE_IP__DEVELOP` (the env should come on the end as to not block Next's client side import that looks for the prefix NEXT*PUBLIC*)

The we can use the following logic to implement different values for different environmets

```js
const isProd = VERCEL_GIT_COMMIT_REF === "master";

const CORS_ANYWHERE_IP = isProd
  ? process.env.NEXT_PUBLIC_CORS_ANYWHERE_IP
  : process.env.NEXT_PUBLIC_CORS_ANYWHERE_IP__DEVELOP;
```

Notes on Environment Variables:

-- vercel env <https://vercel.com/erockdotdev/fortytwofiftyseven/settings/environment-variables>>

## Next JS Reference

- [Serving static assets](https://nextjs.org/docs/basic-features/static-file-serving)

- [Image Optimization](https://nextjs.org/docs/basic-features/image-optimization) handled with [next/image](https://nextjs.org/docs/api-reference/next/image)

```js
import Image from "next/image";
```

- [setting env vars](https://nextjs.org/docs/basic-features/environment-variables)

  - next enforces an opinionated version of env vars allowing us only to easily assess variables in a `env.local` file, not env.
  - Browser environment variables will only be accessible when prefixed with `NEXT_PUBLIC_`.

- Page Generation
  - Static Pages
    - no data needed - page will be created as a static page by default if it requires no external data
    - data needed - use `getStaticProps` on page level to fetch data and generate static page. Because this is server rendered we don't have access to headers or query params
  - Server generated pages
    - when we do need headers or client data to complete request use `getServerSideProps`.
  - Client rendering
    - in cases where we need some data that changes frequently we can use which ever method (server or static generated) then make calls in the ui client side for specific pieces of data

Note: from Next.js on `getInitialProps`. If you're using Next.js 9.3 or newer, we recommend that you use getStaticProps or getServerSideProps instead of getInitialProps.
more info [here](https://nextjs.org/docs/api-reference/data-fetching/getInitialProps)

## Style guidelines

- styling with [styled-components](https://styled-components.com/)
  – [Styled Components with SSR](https://styled-components.com/docs/advanced#server-side-rendering)
- [media queries](https://jsramblings.com/how-to-use-media-queries-with-styled-components/) with styled components
- use [classnames](https://www.npmjs.com/package/classnames) package for dynamic class name rendering

## TypeScript

Typescript is configured to allow absolute imports

### Static Generation and Server-side Rendering

For getStaticProps, getStaticPaths, and getServerSideProps, you can use the GetStaticProps, GetStaticPaths, and GetServerSideProps types respectively:

```js
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

export const getStaticProps: GetStaticProps = async (context) => {
  // ...
};

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
};
```

### API Routes

The following is an example of how to use the built-in types for API routes:

```js
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // ...
};
```

## IDE

Feel free to use any editor but I recommend VS code with the following configurations
Plugins

- [Auto Tag Rename](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

Folder Structure
Loosely based on [this](https://wityan.medium.com/next-js-project-structure-1531610bed71) article
