import "../styles/index.css";
import Alpine from "alpinejs";
import focus from '@alpinejs/focus'
import components from "./components";

// https://vitejs.dev/guide/env-and-mode.html#env-variables
if (import.meta.env.DEV) {
	console.log({
		BASE_URL: import.meta.env.BASE_URL,
		PROD: import.meta.env.PROD,
		DEV: import.meta.env.DEV,
	});
}

(window as any).Alpine = Alpine;

Alpine.plugin(focus);
Alpine.plugin(components);

Alpine.start();
