import * as React from "react";
import QRCode from "react-qr-code";
import { createRender, useModelState } from "@anywidget/react";

export const render = createRender(() => {
  const [content] = useModelState("content");
  let a = f;
  return <QRCode value={content} />;
});
