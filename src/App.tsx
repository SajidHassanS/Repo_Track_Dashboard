import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Dashboard from './pages/Dashboard/Dashboard';
import Finance from './pages/Finance/Finance';
import MyClients from './pages/Client/MyClients';
import Repossessions from './pages/Repossessions/Repossessions';
import Branches from './pages/Branches/Branches';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import ResetPassword from './pages/Authentication/ResetPassword';
import EmailInstructions from './pages/Authentication/EmailInstructions';
import PasswordChanged from './pages/Authentication/PasswordChanged';
import Details from './pages/Details/Details';
import Reports from './pages/Reports/Reports'

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
      <Route
          path='/'
          element={
            <>
              <PageTitle title="SignIn Repo Track" />
              <SignIn />
            </>
          }
        />
      <Route
          path='/signup'
          element={
            <>
              <PageTitle title="SignUp Repo Track" />
              <SignUp />
            </>
          }
        />
        <Route
          path='/forget_password'
          element={
            <>
              <PageTitle title="Forget Password Repo Track" />
              <ForgotPassword />
            </>
          }
        />
         <Route
          path='/reset_password'
          element={
            <>
              <PageTitle title="Reset Password Repo Track" />
              <ResetPassword />
            </>
          }
        />
         <Route
          path='/emailinstruction'
          element={
            <>
              <PageTitle title="Email Instruction Repo Track" />
              <EmailInstructions />
            </>
          }
        />
         <Route
          path='/password_change'
          element={
            <>
              <PageTitle title="Change Password Repo Track" />
              <PasswordChanged />
            </>
          }
        />
        <Route
          path='/dashboard'
          element={
            <>
              <PageTitle title="Dashboard" />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/finance"
          element={
            <>
              <PageTitle title="Finance" />
              <Finance />
            </>
          }
        />
        <Route
          path="/clients"
          element={
            <>
              <PageTitle title="Clients" />
              <MyClients/>
            </>
          }
        />
          <Route
          path="/reports"
          element={
            <>
              <PageTitle title="Reports" />
              <Reports/>
            </>
          }
        />
          <Route
          path="/repossessions"
          element={
            <>
              <PageTitle title="Repossessions" />
              <Repossessions />
            </>
          }
        />
              <Route
          path="/branches"
          element={
            <>
              <PageTitle title="Branches" />
              <Branches />
            </>
          }
        />
        <Route
          path="/details"
          element={
            <>
              <PageTitle title="Details" />
              <Details/>
            </>
          }
        />
        {/* <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;
