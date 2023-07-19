import * as React from "react";
import QRCode from "react-qr-code";

export default function App({ content }) {
  return <QRCode value={content} />
}
