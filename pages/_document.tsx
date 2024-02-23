import Document, { Head, Html, Main, NextScript } from 'next/document';
import { GoogleAnalytics } from '@next/third-parties/google';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link id="favicon" rel="shortcut icon" href="/favicon.ico" />
          <script
            async
            src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                kofiWidgetOverlay.draw('dunkbing', {
                  'type': 'floating-chat',
                  'floating-chat.donateButton.text': 'Support me',
                  'floating-chat.donateButton.background-color': '#00b9fe',
                  'floating-chat.donateButton.text-color': '#fff'
                });`,
            }}
          />
        </Head>
        <body className="bg-gray-900 text-white">
          <Main />
          <NextScript />
        </body>
        <GoogleAnalytics gaId="G-5B9VRV78DN" />
      </Html>
    );
  }
}

export default MyDocument;
