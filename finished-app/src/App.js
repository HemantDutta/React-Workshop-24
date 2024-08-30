import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login";
import {Home} from "./pages/Home";
import {ExplainUseState} from "./pages/ExplainUseState";
import {ExplainUseEffect} from "./pages/ExplainUseEffect";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/login"} element={<Login/>}/>
          <Route path={"/explain-use-state"} element={<ExplainUseState/>}/>
          <Route path={"/explain-use-effect"} element={<ExplainUseEffect/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
