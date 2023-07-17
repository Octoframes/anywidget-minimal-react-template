import pathlib
import anywidget
import traitlets

class HelloWidget(anywidget.AnyWidget):
    _esm = """
    export function render({ model, el }) {
      let getCount = () => model.get("count");
      let button = document.createElement("button");
      button.classList.add("counter-button");
      button.innerHTML = `count is ${getCount()}`;
      button.addEventListener("click", () => {
        model.set("count", getCount() + 1);
        model.save_changes();
      });
      model.on("change:count", () => {
        button.innerHTML = `count is ${getCount()}`;
      });
      el.appendChild(button);
    }
    """
    _css="""
    .counter-button { background-color: #ea580c; }
    .counter-button:hover { background-color: #9a3412; }
    """
    count = traitlets.Int(0).tag(sync=True)



# # bundler yields hello_widget/static/{index.js,styles.css}
# bundler_output_dir = pathlib.Path(__file__).parent / "static"

# class HelloWidget(anywidget.AnyWidget):
#   _esm = bundler_output_dir / "index.js"
#   _css = bundler_output_dir / "styles.css"
#   name = traitlets.Unicode().tag(sync=True)