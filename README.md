# anywidget-minimal-react-template

``````
npm install
npm run build

python3.11 -m venv .venv && source .venv/bin/activate
pip install -e ".[dev]" 
```

Your project should now look like this:
```
📁 Project Root (name of your project)
┣━━ 📂 .venv
┃   ┗━━ ... (content of .venv folder)
┣━━ 📂 node_modules
┃   ┗━━ ... (content of node_modules folder)
┣━━ 📂 js
┃   ┗━━ 📄 widget.jsx
┣━━ 📂 src
┃   ┗━━ 📂 qr_code_widget
┃       ┣━━ 📄 __init__.py
┃       ┗━━ 📂 static
┃           ┗━━ 📄 widget.js
┣━━ 📄 README.md
┣━━ 📄 pyproject.toml
┣━━ 📄 package.json
┣━━ 📄 package-lock.json
┣━━ 📄 .gitignore
┗━━ 📄 hello.ipynb
``````