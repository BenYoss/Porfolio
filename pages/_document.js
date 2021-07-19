/* eslint-disable class-methods-use-this */
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
        <Html>
          <Head>
            <link rel="icon" type="image/png" sizes="32x32" href="me.png" />
            <meta property="og:image" content="benyossprofile2.png" />
            <title>Benjamin Yoss</title>
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
