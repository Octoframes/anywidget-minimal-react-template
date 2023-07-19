import * as React from "react";
import QRCode from "react-qr-code";

import { useModelState } from "./hooks.js";

export default function App() {
  let [content] = useModelState("content");
  return <QRCode value={content} />;
}
