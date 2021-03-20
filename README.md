# Read Me

## Vercel Deployment

<https://vercel.com/erockdotdev/fortytwofiftyseven>

| environment | URL                                       | env vars |
| ----------- | ----------------------------------------- | -------- |
| production  | <https://fortytwofiftyseven.com/>         | prod     |
| staging     | <https://staging.fortytwofiftyseven.com>  | prod     |
| develop     | <https://develop.fortytwofiftyseven.com/> | develop  |

Vercel doesn't handel environment variables per environment. Their [official](https://vercel.com/support/articles/set-up-a-staging-environment-on-vercel) solution
is to create logic based off of the `VERCEL_GIT_COMMIT_REF` which when deployed will give us the git branch associated with a deploy environment. we should create separate develop environment values and logic based on `VERCEL_GIT_COMMIT_REF` to select the correct value.

so for example if we had the environment variable `NEXT_PUBLIC_CORS_ANYWHERE_IP` we would also set `NEXT_PUBLIC_CORS_ANYWHERE_IP__DEVELOP` (the env should come on the end as to not block Next's client side import that looks for the prefix NEXT*PUBLIC*)

The we can use the following logic to implement different values for different environmets

```js
const isProd = VERCEL_GIT_COMMIT_REF === "master";

const CORS_ANYWHERE_IP = isProd
  ? process.env.NEXT_PUBLIC_CORS_ANYWHERE_IP
  : process.env.NEXT_PUBLIC_CORS_ANYWHERE_IP__DEVELOP;
```

Notes on Environment Variables
<https://vercel.com/erockdotdev/fortytwofiftyseven/settings/environment-variables>

## Next JS Reference

- [Serving static assets](https://nextjs.org/docs/basic-features/static-file-serving)

- [Image Optimization](https://nextjs.org/docs/basic-features/image-optimization) handled with [next/image](https://nextjs.org/docs/api-reference/next/image)

  ```js
  import Image from "next/image";
  ```

- Page Generatoion
  - Static Pages
    - no data needed - page will be created as a static page by default if it requires no external data
    - data needed - use `getStaticProps` on page level to fetch data and generate static page. Because this is server rendered we don't have access to headers or query params
  - Server generated pages
    - when we do need headers or client data to complete request use `getServerSideProps`.
  - Client rendering
    - in cases where we need some data that changes frequently we can use which ever method (server or static generated) then make calls in the ui client side for specific pieces of data

## Style guidelines

- styling with [styled-components](https://styled-components.com/)
  – [Styled Components with SSR](https://styled-components.com/docs/advanced#server-side-rendering)
- use [classnames](https://www.npmjs.com/package/classnames) package for dynamic class name rendering

## IDE

Feel free to use any editor but I recommend VS code with the following configurations
Plugins

- [Auto Tag Rename](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
