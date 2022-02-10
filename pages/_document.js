import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta name="theme-color" content="#070724" />
          <meta name="author" content="Yasin" />
          <meta name="title" content="Yasin | Portfolio" />
          <meta
            name="description"
            content="A passionate javascript full-stack developer .Love to learning and sharing my knowledge with others."
          />
          <meta
            name="keywords"
            content="website, portfolio, yasin, yasindev, react js, next js, full stact, developer, frontend, backend, html, css, javascript, js dev, node js, express js, "
          />
          <link rel="canonical" href="https://yasindev.netlify.app/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Yasin | Portfolio" />
          <meta
            property="og:description"
            content="A passionate javascript full-stack developer .Love to learning and sharing my knowledge with others."
          />
          <meta property="og:image" content="/img/og.png" />
          <meta property="og:url" content="https://yasindev.netlify.app/" />
          <meta property="og:site_name" content="Yasin" />

          <meta name="twitter:domain" content="https://yasindev.netlify.app/" />
          <meta name="twitter:title" content="Yasin | Portfolio" />
          <meta
            name="twitter:description"
            content="A passionate javascript full-stack developer .Love to learning and sharing my knowledge with others."
          />
          <meta name="twitter:image" content="/og.png" />
          <meta name="twitter:site" content="@Yasin" />
          <meta name="twitter:creator" content="@Yasin" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="application-name" content="Yasin" />
          <meta name="apple-mobile-web-app-title" content="Yasin" />

          <link rel="icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
