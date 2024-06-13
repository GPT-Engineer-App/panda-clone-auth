import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import PhoneVerification from "./pages/PhoneVerification.jsx";
import PasswordReset from "./pages/PasswordReset.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/phone-verification" element={<PhoneVerification />} />
        <Route path="/password-reset" element={<PasswordReset />} />
      </Routes>
    </Router>
  );
}

export default App;
