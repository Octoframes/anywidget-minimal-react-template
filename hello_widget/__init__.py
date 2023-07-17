import pathlib
import anywidget
import traitlets

class HelloWidget(anywidget.AnyWidget):
    _esm =  pathlib.Path(__file__).parent.parent / "src/index.js"
    _css=  pathlib.Path(__file__).parent.parent / "src/styles.css"
    count = traitlets.Int(0).tag(sync=True)
