# Read Me

## Vercel Deployment

https://vercel.com/erockdotdev/fortytwofiftyseven

https://develop.fortytwofiftyseven.com/
https://staging.fortytwofiftyseven.com/
https://fortytwofiftyseven.com/

Environment Variables 
https://vercel.com/erockdotdev/fortytwofiftyseven/settings/environment-variables

## Next JS Reference

- [Serving static assets](https://nextjs.org/docs/basic-features/static-file-serving)

- [Image Optimization](https://nextjs.org/docs/basic-features/image-optimization) handled with [next/image](https://nextjs.org/docs/api-reference/next/image)
- Page Generatoion 
  - Static Pages
    - no data needed - page will be created as a static page by default if it requires no external data
    - data needed - use `getStaticProps` on page level to fetch data and generate static page. Because this is server rendered we don't have access to headers or query params
  - Server generated pages
    - when we do need headers or client data to complete request use `getServerSideProps`.
  - Client rendering 
    - in cases where we need some data that changes frequently we can use which ever method (server or static generated) then make calls in the ui client side for  specific pieces of data

## Style guidelines

- styling with [styled-components](https://styled-components.com/)
  – [Styled Components with SSR](https://styled-components.com/docs/advanced#server-side-rendering)
- use [classnames](https://www.npmjs.com/package/classnames) package for dynamic class name rendering

## IDE

Feel free to use any editor but I recommend VS code with the following configurations
Plugins

- [Auto Tag Rename](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
