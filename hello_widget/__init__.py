import pathlib
import anywidget
import traitlets

class HelloWidget(anywidget.AnyWidget):
    p = pathlib.Path(__file__).parent / "static/widget.js"
    _esm =  p

    # _css=  pathlib.Path(__file__).parent / "static/styles.css"
    # count = traitlets.Int(0).tag(sync=True)