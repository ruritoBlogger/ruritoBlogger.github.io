import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
interface CustomDocumentInterface {
  url: string;
  title: string;
  description: string;
}

class MyDocument extends Document implements CustomDocumentInterface {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  url = "https://rurito0125.dev";
  title = `rurito0125's portfolio`;
  description = "rurito0125のポートフォリオです.";

  render() {
    return (
      <Html lang="ja-JP">
        <Head>
          <title>{this.title}</title>
          <meta charSet="utf-8"></meta>
          <meta name="description" content={this.description} />
          <link rel="icon" href="/images/favicon.ico" />
          <meta property="og:description" content={this.description} />
          <meta property="og:site_name" content={this.title} />
          <meta property="og:url" content={this.url} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={this.title} />
          <meta property="og:locale" content="ja_JP" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@ruriro0125" />
          <meta name="twitter:creator" content="@ruriro0125" />
          <meta name="twitter:title" content={this.title} />
          <meta name="twitter:description" content={this.description} />
          <meta name="robots" content="noindex,nofollow" />
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
