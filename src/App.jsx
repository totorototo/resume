import json from "./assets/data.json";
import { Main } from "./components/pages/index.js";

function App() {
  return json && <Main data={json} />;
}

export default App;
