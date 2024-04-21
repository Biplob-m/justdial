import Admin from "./AdminPages/Admin";

import {
  BrowserRouter as Router,
  Switch,
   Route,
   Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import GetCategory from "./AdminPages/GetCategory";
import CategoryUpdate from "./AdminPages/CategoryUpdate";


function App() {
  return (
    <>
    <Router>

   <Routes>
   <Route path="/admin" element={ <Admin/>} />
   <Route path="/admin/abc/:id" element={<CategoryUpdate></CategoryUpdate>} />
   
   </Routes>
   </Router>
      
    </>
    
  );
}

export default App;
