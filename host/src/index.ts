void import("axios");

const root = document.getElementById("root-3000");

const sequentialButton = document.createElement("button");
sequentialButton.innerText = "Load My Remotes sequentially";
root.appendChild(sequentialButton);

const concurrentButton = document.createElement("button");
concurrentButton.innerText = "Load All Remotes concurrently";
root.appendChild(concurrentButton);

const disableButtons = () => {
  sequentialButton.disabled = true;
  concurrentButton.disabled = true;
};

sequentialButton.onclick = async () => {
  // @ts-ignore
  await import(`remote_3001/App`);
  // @ts-ignore
  await import(`remote_3002/App`);
  // @ts-ignore
  await import(`remote_3003/App`);
  // @ts-ignore
  await import(`remote_3004/App`);
  // @ts-ignore
  await import(`remote_3005/App`);
  // @ts-ignore
  await import(`remote_3006/App`);
  // @ts-ignore
  await import(`remote_3007/App`);
  // @ts-ignore
  await import(`remote_3008/App`);
  // @ts-ignore
  await import(`remote_3009/App`);
  // @ts-ignore
  await import(`remote_3010/App`);
  // @ts-ignore
  await import(`remote_3010/App`);
  disableButtons();
};

concurrentButton.onclick = () => {
  // @ts-ignore
  void import(`remote_3001/App`);
  // @ts-ignore
  void import(`remote_3002/App`);
  // @ts-ignore
  void import(`remote_3003/App`);
  // @ts-ignore
  void import(`remote_3004/App`);
  // @ts-ignore
  void import(`remote_3005/App`);
  // @ts-ignore
  void import(`remote_3006/App`);
  // @ts-ignore
  void import(`remote_3007/App`);
  // @ts-ignore
  void import(`remote_3008/App`);
  // @ts-ignore
  void import(`remote_3009/App`);
  // @ts-ignore
  void import(`remote_3010/App`);
  // @ts-ignore
  void import(`remote_3010/App`);
  disableButtons();
};
