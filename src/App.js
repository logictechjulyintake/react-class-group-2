import { BrowserRouter, Route, Routes } from "react-router-dom";
import FetchAPIEg from "./components/FetchAPIEg";
import Home from "./components/Home";

function App() {
  return (
    <>
      {/* <FetchAPIEgTwo /> */}

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/posts" element={<FetchAPIEg />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
