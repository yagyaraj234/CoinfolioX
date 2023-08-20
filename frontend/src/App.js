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
import ProtectedRoutes from "./components/ProtectedRoutes";
import Layout from "./components/Layout/Layout";

import { useToken } from "./components/Context/Token";
function App() {
  const { token } = useToken();
  return (
    <Layout token={token}>
      <div className=" text-justify bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/cryptocurrencies"
            element={<Cryptocurrencies />}
          ></Route>
          <Route path="/coins/:id" element={<CoinDetail />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/exchanges" element={<Exchanges />} />

          {/* Login  Signup routes  */}
          <Route path="/profile" element={<Profile />} />
          <Route element={<ProtectedRoutes token={token} />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/signup" element={<Signup />} />

          {/* Universal route/ Invalid Route  */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
