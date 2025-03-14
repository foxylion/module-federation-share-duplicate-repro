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
      runtimePlugins: [],
      remotes: {
        remote_3001: "remote_3001@http://localhost:3001/mf-manifest.json",
        remote_3002: "remote_3002@http://localhost:3002/mf-manifest.json",
        remote_3003: "remote_3003@http://localhost:3003/mf-manifest.json",
        remote_3004: "remote_3004@http://localhost:3004/mf-manifest.json",
        remote_3005: "remote_3005@http://localhost:3005/mf-manifest.json",
        remote_3006: "remote_3006@http://localhost:3006/mf-manifest.json",
        remote_3007: "remote_3007@http://localhost:3007/mf-manifest.json",
        remote_3008: "remote_3008@http://localhost:3008/mf-manifest.json",
        remote_3009: "remote_3009@http://localhost:3009/mf-manifest.json",
        remote_3010: "remote_3010@http://localhost:3010/mf-manifest.json",
      },
      exposes: {},
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
