import "./App.css";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Product from "./component/Product";
import Login from "./component/Login";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

  return (
    <div className="App">
      <Navbar setToken={setToken} />
      {token ? <Product /> : <Login token={token} setToken={setToken} />}

      <Footer />
    </div>
  );
}

export default App;
