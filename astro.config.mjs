import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightTypeDoc, { typeDocSidebarGroup } from "starlight-typedoc";

// https://astro.build/config
export default defineConfig({
    site: "https://newgroundsjs.lajbel.com",
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
                {
                    ...typeDocSidebarGroup,
                },
            ],
            plugins: [
                starlightTypeDoc({
                    entryPoints: [
                        "../newgrounds-js/dist/global.d.ts",
                        "../newgrounds-js/dist/newgrounds.d.ts",
                    ],
                    typeDoc: {
                        plugin: [
                            "typedoc-plugin-merge-modules",
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
                    tsconfig: "../newgrounds-js/tsconfig.json",
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
