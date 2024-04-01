
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import WindowsUpdate from "./pages/FakeUpdate/Win7Update";

function App() {
  return (
       <>
         <HashRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
            </Route>
          </Routes>
         </HashRouter>
       </>
  );
}

export default App;
