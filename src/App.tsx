
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";

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
