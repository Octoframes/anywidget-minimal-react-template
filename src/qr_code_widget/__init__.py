import pathlib
import importlib.metadata

import anywidget
import traitlets

try:
    __version__ = importlib.metadata.version("qr_code_widget")
except importlib.metadata.PackageNotFoundError:
    __version__ = "unknown"


class QRCodeWidget(anywidget.AnyWidget):
    content = traitlets.Unicode("Hi").tag(sync=True)
    _esm = pathlib.Path(__file__).parent / "static" /"widget.js"
