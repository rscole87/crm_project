import { BrowserRouter } from "react-router-dom";
import Main from "./components/MainComponent";
import "font-awesome/css/font-awesome.css";
import '../src/css/style.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
