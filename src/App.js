import { BrowserRouter, Route, Routes } from "react-router-dom";
import FetchAPIEg from "./components/FetchAPIEg";
import Home from "./components/Home";
import MyForm from "./components/MyForm";
import FetchAPIEgTwo from "./components/FetchAPIEgTwo";
import MapExample from "./components/MapExample";
import MyCard from "./components/MyCard";

function App() {
  return (
    <>
      {/* <FetchAPIEgTwo /> */}

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/posts" element={<FetchAPIEg />} />
          <Route path="/form" element={<MyForm />} />
          <Route path="/featch" element={<FetchAPIEgTwo />} />
          <Route path="/Map" element={<MapExample />} />
          <Route path="/card" element={<MyCard />} />


        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
