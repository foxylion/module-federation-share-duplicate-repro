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
      dts: false,
      runtimePlugins: [],
      experiments: { externalRuntime: true },
      exposes: {
        "./App": "./src/App.tsx",
        "./LazyApp": "./src/LazyApp.ts",
      },
      shared: {
        react: {
          singleton: true,
          shareKey: "react:19.0.0",
          version: "19.0.0",
          requiredVersion: "19.0.0",
        },
        "react-dom": {
          singleton: true,
          shareKey: "react-dom:19.0.0",
          version: "19.0.0",
          requiredVersion: "19.0.0",
        },
        "react-dom/client": {
          singleton: true,
          shareKey: "react-dom/client:19.0.0",
          version: "19.0.0",
          requiredVersion: "19.0.0",
        },
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
