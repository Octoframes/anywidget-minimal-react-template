import * as React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

function WidgetAdapter({ model }) {
  let [content, setContent] = React.useState(model.get("content"));
  React.useEffect(() => {
    // update content anytime the model changes (from either Python or JS)
    model.on("change:content", () => setContent(model.get("content")));
  }, [])
  return <App content={content} />
}

export function render({ model, el }) {
  let root = ReactDOM.createRoot(el);
  root.render(
    <React.StrictMode>
      <WidgetAdapter model={model} />
    </React.StrictMode>,
  );
  return () => root.unmount();
}


