import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Portfolio,
  Login,
  Cryptocurrencies,
  Signup,
  Trending,
  Articles,
  Profile,
  NotFound,
  Exchanges,
} from "./Pages/index";
import CoinDetail from "./Pages/CoinDetail";
import { useEffect, useState } from "react";
import ProtectedRoutes from "./components/ProtectedRoutes";
function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);
  return (
    <div className=" text-justify bg-[#F9FAFD]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />}></Route>
        <Route path="/coins/:id" element={<CoinDetail />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/exchanges" element={<Exchanges />} />

        {/* Login  Signup routes  */}
        <Route element={<ProtectedRoutes token={token} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/signup" element={<Signup />} />

        {/* Universal route/ Invalid Route  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
