import Document, { Head, Html, Main, NextScript } from 'next/document';

import { GA_ID } from '@lib/ga';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link id="favicon" rel="shortcut icon" href="/favicon.ico" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_ID}');`,
            }}
          />
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
        <body className="bg-white dark:bg-black text-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
