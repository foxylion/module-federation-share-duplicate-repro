import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact({
      splitChunks: { react: false, router: false },
    }),
    pluginModuleFederation({
      name: "host",
      dts: false,
      runtimePlugins: [],
      exposes: {},
      shared: ["axios"], // share at least something
      shareStrategy: "loaded-first",
    }),
  ],
  html: { template: "./public/index.html" },
  dev: {
    assetPrefix: "auto",
    client: { host: "localhost", port: 3000 },
  },
  server: {
    port: 3000,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  output: {
    assetPrefix: "auto",
    sourceMap: { js: "source-map" },
    distPath: { root: "build" },
  },
});
