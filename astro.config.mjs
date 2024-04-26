import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "Newgrounds.js",
            favicon: "./src/assets/favicon.ico",
            logo: {
                src: "./src/assets/newgrounds.js.png",
                replacesTitle: true,
            },
            social: {
                github: "https://github.com/lajbel/newgrounds-js",
            },
            sidebar: [
                {
                    label: "Installation",
                    link: "/install/",
                },
            ],
        }),
    ],
});
