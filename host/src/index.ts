import { registerRemotes, loadRemote } from "@module-federation/runtime";

for (let port = 3001; port <= 3010; port++) {
  registerRemotes([
    {
      name: `remote_${port}`,
      entry: `http://localhost:${port}/mf-manifest.json`,
    },
  ]);
}

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
