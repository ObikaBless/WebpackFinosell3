import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import DashboardOutlet from "./layout/outlet/DashboardOutlet";
import BudgetPage from "./pages/budget/BudgetPage";
import ExpensesPage from "./pages/expenses/ExpensesPage";
import AccountPage from "./pages/account/AccountPage";
import LoginPage from "./pages/login/LoginPage";
import ForgetPwdPage from "./pages/forget-password/ForgetPwdPage";
// import HomePage from "./pages/home/HomePage";

function App() {
  const [isAuthorized, setIsAuthorized] = React.useState<boolean | string>("");
  const location = useLocation();
  React.useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    if (token) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, [location.pathname]);
  return (
    <React.Fragment>
      <Toaster />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget-password" element={<ForgetPwdPage />} />
        <Route
          path="/dashboard/"
          element={<DashboardOutlet isAuthorized={isAuthorized} />}
        >
          {/* <Route path="" element={<HomePage />} /> */}
          <Route path="" element={<AccountPage />} />
          <Route path="budget" element={<BudgetPage />} />
          <Route path="expenses" element={<ExpensesPage />} />
          <Route path="account" element={<AccountPage />} />
        </Route>
        {/* <Route path="*" element={<Navigate to="/" replace={true} />} /> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
