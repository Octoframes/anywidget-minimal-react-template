// vite.config.js
import { defineConfig } from "vite";
import anywidget from "@anywidget/vite";

export default defineConfig(async ({ command }) => {
	let define = {};
	if (command === "build") {
		define["process.env.NODE_ENV"] = JSON.stringify("production");
	}
	return {
		plugins: [anywidget()],
		build: {
			outDir: "hello_widget/static",
			lib: {
				entry: ["src/main.jsx"],
				formats: ["es"],
			},
		},
		define,
	}
});