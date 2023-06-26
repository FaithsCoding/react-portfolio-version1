import "./App.css";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
