import Form from "./modules/Form";
import "./App.css";
import Dashboard from "./modules/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({children, auth = false}) => {
  const isLoggedIn = localStorage.getItem("user:token") !== null || false ;

  if (!isLoggedIn && auth) {
    return <Navigate to={"/users/sign_in"} />;
  }else if(isLoggedIn && ['/users/sign_in', '/users/sign_up'].includes(window.location.pathname)) {

    return <Navigate to={'/'} />
  }
   
  return children
};


function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute auth={true}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users/sign_in"
          element={
            <ProtectedRoute>
              <Form isSignedInPage={true} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users/sign_up"
          element={
            <ProtectedRoute>
              <Form isSignedInPage={false} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
