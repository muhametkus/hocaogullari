import {Route, Routes} from "react-router-dom";
import Anasayfa from './pages/Anasayfa';

function App() {
  return (
    
      <Routes>
    <Route path="/" element={<Anasayfa/>} />
    </Routes>
    
  )
}

export default App
