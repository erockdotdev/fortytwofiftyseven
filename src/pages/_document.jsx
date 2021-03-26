import Document, { Html, Head, NextScript, Main } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags, initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        {/* 
          According to Next.js docs we shouldn't add viewport or title meta data here.
          any other data expected to render in the app head should be set _app.jsx
          see: 
          https://err.sh/next.js/no-document-title
          https://err.sh/next.js/no-document-viewport-meta
        */}
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
