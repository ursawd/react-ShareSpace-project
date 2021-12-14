import "./App.css";
import "bootstrap\\dist\\css\\bootstrap.min.css";
import RowSection from "./components/RowSection";

function App() {
  return (
    <div className="App">
      <h1 className="text-primary">APP COMPONENT</h1>
      <RowSection height="50vh" bColor="red" />
      <RowSection height="20vh" bColor="blue" />
    </div>
  );
}

export default App;
