import pathlib
import anywidget
import traitlets

class HelloWidget(anywidget.AnyWidget):
    _esm =  pathlib.Path(__file__).parent / "static/main.js"
    count = traitlets.Int(0).tag(sync=True)

    # _css=  pathlib.Path(__file__).parent / "static/styles.css"