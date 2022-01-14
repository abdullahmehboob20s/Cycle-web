import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import ConnectWalletPage from "pages/ConnectWalletPage/ConnectWalletPage";
import MintPage from "pages/MintPage/MintPage";
import ContextProvider from "context/ContextProvider";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/connect-wallet" element={<ConnectWalletPage />} />
          <Route path="/mint" element={<MintPage />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
