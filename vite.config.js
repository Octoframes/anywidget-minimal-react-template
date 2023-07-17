// vite.config.js
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'


export default defineConfig({
	plugins: [react()],
	define: {'process.env.NODE_ENV': '"production"'},
	build: {
		outDir: "hello_widget/static",
		lib: {
			entry: ["src/main.jsx"],
			formats: ["es"],
		},
	},
});