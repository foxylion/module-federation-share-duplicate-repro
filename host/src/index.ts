import { loadRemote, init } from "@module-federation/runtime";

init({
  name: "host",
  remotes: [
    { name: "remote_3001", entry: "http://localhost:3001/mf-manifest.json" },
    { name: "remote_3002", entry: "http://localhost:3002/mf-manifest.json" },
    { name: "remote_3003", entry: "http://localhost:3003/mf-manifest.json" },
    { name: "remote_3004", entry: "http://localhost:3004/mf-manifest.json" },
    { name: "remote_3005", entry: "http://localhost:3005/mf-manifest.json" },
    { name: "remote_3006", entry: "http://localhost:3006/mf-manifest.json" },
    { name: "remote_3007", entry: "http://localhost:3007/mf-manifest.json" },
    { name: "remote_3008", entry: "http://localhost:3008/mf-manifest.json" },
    { name: "remote_3009", entry: "http://localhost:3009/mf-manifest.json" },
    { name: "remote_3010", entry: "http://localhost:3010/mf-manifest.json" },
  ],
  shareStrategy: "loaded-first",
});

const root = document.getElementById("root-3000");

const sequentialButton = document.createElement("button");
sequentialButton.innerText = "Load Remote Apps sequentially";
root.appendChild(sequentialButton);

const concurrentButton = document.createElement("button");
concurrentButton.innerText = "Load Remote Apps concurrently";
root.appendChild(concurrentButton);

const concurrentLazyButton = document.createElement("button");
concurrentLazyButton.innerText = "Load Remote LazyApps concurrently";
root.appendChild(concurrentLazyButton);

const disableButtons = () => {
  sequentialButton.disabled = true;
  concurrentButton.disabled = true;
  concurrentLazyButton.disabled = true;
};

sequentialButton.onclick = async () => {
  for (let port = 3001; port <= 3010; port++) {
    await loadRemote(`remote_${port}/App`);
  }
  disableButtons();
};

concurrentButton.onclick = () => {
  for (let port = 3001; port <= 3010; port++) {
    void loadRemote(`remote_${port}/App`);
  }
  disableButtons();
};

concurrentLazyButton.onclick = () => {
  for (let port = 3001; port <= 3010; port++) {
    void loadRemote(`remote_${port}/LazyApp`);
  }
  disableButtons();
};
