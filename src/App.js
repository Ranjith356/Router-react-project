import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./component/Homepage";
import Pagenotfount from "./component/Pagenotfount";
import Galary from "./component/Galary";
import BestSell from "./component/Bestsell";
import Applayout from "./component/Applayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="*" element={<Pagenotfount></Pagenotfount>}></Route>
          <Route path="Galary" element={<Galary></Galary>}></Route>
          <Route path="Sell" element={<Applayout></Applayout>}></Route>
          <Route path="BestSell" element={<BestSell></BestSell>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
