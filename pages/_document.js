import Document, { Html, Head, Main, NextScript } from "next/document";



class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
  
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
            rel="preload"
            href="/fonts/avenir/Avenir-Book.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/avenir/Avenir-Black.otf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/*Below we add the modal wrapper*/}
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
