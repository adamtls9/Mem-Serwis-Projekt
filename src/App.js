import Navigation from "./components/navi/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/navi/Routing";
import ContextProvider from "./components/context/ContextProvider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Navigation />
          <Routing />
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
