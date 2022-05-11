import React from "react";
import Head from "next/head";

type Props = {};

const KofiWidget = (props: Props) => {
  const kofi = `
<script>
  kofiWidgetOverlay.draw('akarasellegg', {
    'type': 'floating-chat',
    'floating-chat.donateButton.text': 'Support me',
    'floating-chat.donateButton.background-color': '#ff5f5f',
    'floating-chat.donateButton.text-color': '#fff'
  });
</script>`;

  return (
    <div>
      <Head>
        <script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js" />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: kofi }} />
    </div>
  );
};

export default KofiWidget;
