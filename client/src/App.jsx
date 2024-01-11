import {Route, Routes} from "react-router-dom";
import Anasayfa from './pages/Anasayfa';
import Iletisim from './pages/Iletisim';
import Hakkimizda from "./pages/Hakkimizda";
import Hizmetlerimiz from "./pages/Hizmetlerimiz";
import TeklifAl from "./pages/TeklifAl";

function App() {
  return (
    
      <Routes>
    <Route path="/" element={<Anasayfa/>} />
    <Route path="/iletisim" element={<Iletisim/>} />
    <Route path="/hakkimizda" element={<Hakkimizda/>} />
    <Route path="/Hizmetlerimiz" element={<Hizmetlerimiz/>} />
    <Route path="/teklif-al" element={<TeklifAl/>} />
    </Routes>
    
  )
}

export default App
