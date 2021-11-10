import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import AuthProvider from "./context/AuthProvider";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/MyOrders/MyOrders";
import Products from "./pages/Products/Products";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Orders from "./pages/Orders/Orders";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/explore">
              <Products></Products>
            </Route>
            <PrivateRoute path="/orders/:id">
              <Orders></Orders>
            </PrivateRoute>
            <Route exact path="/myBookings">
              <MyOrders></MyOrders>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
