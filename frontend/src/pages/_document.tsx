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

const generateJsonLd = () => {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    headline: "るりとのポートフォリオ",
    datePublished: "2021-02-05T23:00:00+09:00",
    dateModified: "2021-02-05T23:00:00+09:00",
    image: ["https://rurito0125.dev/images/ogp.png"],
  };
  return JSON.stringify(jsonLd);
};

class MyDocument extends Document implements CustomDocumentInterface {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  url = "https://rurito0125.dev";
  title = `るりとのポートフォリオ`;
  description = "rurito0125のポートフォリオです.";

  render() {
    const jsonLd = generateJsonLd();
    return (
      <Html lang="ja-JP">
        <Head>
          <meta charSet="utf-8"></meta>
          <meta name="description" content={this.description} />
          <link rel="icon" href="/images/favicon.ico" />
          <meta property="og:description" content={this.description} />
          <meta property="og:site_name" content={this.title} />
          <meta property="og:url" content={this.url} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={this.title} />
          <meta name="og:image" content={`${this.url}/images/ogp.png`} />
          <meta property="og:locale" content="ja_JP" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@ruriro0125" />
          <meta name="twitter:creator" content="@ruriro0125" />
          <meta name="twitter:title" content={this.title} />
          <meta name="twitter:image" content={`${this.url}/images/ogp.png`} />
          <meta name="twitter:description" content={this.description} />
          {jsonLd && (
            <script
              key="json-ld"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: jsonLd }}
            />
          )}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p&family=Noto+Sans+JP&family=Roboto&display=swap" rel="stylesheet" />
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
