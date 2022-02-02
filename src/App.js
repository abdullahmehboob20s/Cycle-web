import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import ConnectWalletPage from "pages/ConnectWalletPage/ConnectWalletPage";
import MintPage from "pages/MintPage/MintPage";
import ContextProvider from "context/ContextProvider";
import TermsAndConditionPage from "pages/TermsAndConditionPage/TermsAndConditionPage";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/connect-wallet" element={<ConnectWalletPage />} />
          <Route path="/mint" element={<MintPage />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditionPage />}
          />
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
