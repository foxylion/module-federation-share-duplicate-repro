import { createRoot } from "react-dom/client";
import { init } from "@module-federation/runtime";

init({
  name: `remote_${process.env.PUBLIC_PORT}`,
  remotes: [],
});

const App: React.FC = () => {
  return <p>Hello World from remote_{process.env.PUBLIC_PORT}</p>;
};

const root = createRoot(
  document.getElementById(`root-${process.env.PUBLIC_PORT}`),
);
root.render(<App />);
