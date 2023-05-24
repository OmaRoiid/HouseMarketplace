import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Explore } from "./pages/Explore";
import { ForgetPassword } from "./pages/ForgotPassword";
import { Offers } from "./pages/Offers";
import { SignIn } from "./pages/Signin";
import { SignUp } from "./pages/Signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/profile" element={<SignIn />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
