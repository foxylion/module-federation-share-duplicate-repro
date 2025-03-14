import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact({
      splitChunks: { react: false, router: false },
    }),
    pluginModuleFederation({
      name: `remote_${process.env.PUBLIC_PORT}`,
      runtimePlugins: [],
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-dom/client": { singleton: true },
      },
    }),
  ],
  html: { template: "./public/index.html" },
  dev: {
    assetPrefix: "auto",
    client: {
      host: "localhost",
      port: Number.parseInt(process.env.PUBLIC_PORT),
    },
  },
  server: {
    port: Number.parseInt(process.env.PUBLIC_PORT),
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  output: {
    assetPrefix: "auto",
    sourceMap: { js: "source-map" },
    distPath: { root: `build-${process.env.PUBLIC_PORT}` },
  },
});
