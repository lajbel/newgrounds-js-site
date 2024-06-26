import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightTypeDoc, { typeDocSidebarGroup } from "starlight-typedoc";

// https://astro.build/config
export default defineConfig({
    site: "https://newgrounds.js.org",
    integrations: [
        starlight({
            title: "Newgrounds.js",
            favicon: "./src/assets/favicon.ico",
            logo: {
                src: "./src/assets/newgrounds.js.png",
                replacesTitle: true,
            },
            customCss: [
                "./src/styles/custom.css",
            ],
            social: {
                github: "https://github.com/lajbel/newgrounds-js",
            },
            sidebar: [
                {
                    label: "Getting Started",
                    autogenerate: {
                        directory: "start",
                    },
                },
                {
                    label: "Usage manual",
                    autogenerate: {
                        directory: "guides",
                    },
                },
                typeDocSidebarGroup,
            ],
            plugins: [
                starlightTypeDoc({
                    entryPoints: [
                        "./newgrounds-js/dist/newgrounds.d.ts",
                    ],
                    typeDoc: {
                        plugin: [
                            "typedoc-plugin-merge-modules",
                            "typedoc-plugin-mdn-links",
                        ],
                        /** Merge Modules */
                        mergeModulesRenameDefaults: false,
                        mergeModulesMergeMode: "project",

                        /** TypeDoc */
                        categorizeByGroup: true,
                        parametersFormat: "table",
                        propertiesFormat: "table",
                        enumMembersFormat: "table",
                        typeDeclarationFormat: "table",
                        excludePrivate: true,
                        excludeProtected: true,
                        useCodeBlocks: false,
                        expandObjects: true,
                        groupOrder: [
                            "Functions",
                        ],
                    },
                    tsconfig: "./newgrounds-js/tsconfig.json",
                    includeTag: "internalDoNotUse",
                    sidebar: {
                        label: "API Reference",
                        collapsed: true,
                    },
                }),
            ],
        }),
    ],
});
