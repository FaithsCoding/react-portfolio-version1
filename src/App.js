import "./App.css";
import { Banner } from "./components/Banner";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Banner />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
