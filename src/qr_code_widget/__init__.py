import pathlib
import anywidget
import traitlets

class QRCodeWidget(anywidget.AnyWidget):
    content = traitlets.Unicode("Hi").tag(sync=True)
    _esm =  pathlib.Path(__file__).parent / "widget.js"
