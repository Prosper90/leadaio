import { Routes, Route, Link } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import Dashboard from "./components/pages/Dashboard";
import { useLocation } from 'react-router-dom';



function App() {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <div className={location.pathname === "/signin" ? "w-full h-[100vh] bg-leadyellow" : "w-full h-auto bg-leadash"}>
          <Routes>
              <Route path="/" element={<Signup  />} />
          </Routes>

          <Routes>
              <Route path="/signin" element={<Signin  />} />
          </Routes>

          <Routes>
              <Route path="/dashboard" element={<Dashboard  />} />
          </Routes>

    </div>
  );
}

export default App;
