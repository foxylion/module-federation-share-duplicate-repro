# Concurrency issue for dependency loading

This example shows that dependencies are loaded multiple times even when shared via module federation and remotes are loaded in parallel.

## How to run

```shell
pnpm install
pnpm run dev
```

Now open a browser a http://localhost:3000 and the network tab of the browser developer tools.

### Sequential example

Click on the "Load My Remotes sequentially" button to load one remote at a time and see that the react-dom dependency is only loaded once:

```
http://localhost:3001/static/js/async/vendors-node_modules_pnpm_react-dom_19_0_0_react_19_0_0_node_modules_react-dom_index_js.js
```

### Parallel example

Reload the page, then click on "Load All Remotes concurrently" to load all remotes at once. You will see that the react-dom dependency is loaded multiple times:

```
http://localhost:3001/static/js/async/vendors-node_modules_pnpm_react-dom_19_0_0_react_19_0_0_node_modules_react-dom_index_js.js
http://localhost:3002/static/js/async/vendors-node_modules_pnpm_react-dom_19_0_0_react_19_0_0_node_modules_react-dom_index_js.js
http://localhost:3004/static/js/async/vendors-node_modules_pnpm_react-dom_19_0_0_react_19_0_0_node_modules_react-dom_index_js.js
http://localhost:3005/static/js/async/vendors-node_modules_pnpm_react-dom_19_0_0_react_19_0_0_node_modules_react-dom_index_js.js
http://localhost:3006/static/js/async/vendors-node_modules_pnpm_react-dom_19_0_0_react_19_0_0_node_modules_react-dom_index_js.js
http://localhost:3007/static/js/async/vendors-node_modules_pnpm_react-dom_19_0_0_react_19_0_0_node_modules_react-dom_index_js.js
http://localhost:3009/static/js/async/vendors-node_modules_pnpm_react-dom_19_0_0_react_19_0_0_node_modules_react-dom_index_js.js
http://localhost:3010/static/js/async/vendors-node_modules_pnpm_react-dom_19_0_0_react_19_0_0_node_modules_react-dom_index_js.js
```

The remotes that load their own copy of react-dom are random, some will rely on an already loaded version, others not.
