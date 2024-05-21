import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/Profile";
import Sidebar from "./components/Sidebar";
import { adminRoutes, userRoutes } from "./utils/sidebarRoutes";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { loadUser } from "./redux/actions/auth";
import Loader from "./pages/Loader";
import { ProtectedRoute } from "protected-route-react";
import LocomotiveScroll from "locomotive-scroll";
import Menu from "./pages/Menu";
import FoodItems from "./pages/admin/FoodItems";
import CreateFood from "./pages/admin/CreateFood";
import UpdateFood from "./pages/admin/UpdateFood";
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const { loading, isAuthenticated, error, message, user } = useSelector(
    (state) => state?.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [error, message]);
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route
          path="/login"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect={"/profile"}
            >
              <Login />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect={"/profile"}
            >
              <Register />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/profile"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              redirect={"/login"}
            >
              <Sidebar
                navList={
                  isAuthenticated && user.role === "user"
                    ? userRoutes
                    : adminRoutes
                }
                component={Profile}
                isAuthenticated={isAuthenticated}
                user={user}
              />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/admin/food"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              redirect={"/login"}
            >
              <Sidebar
                navList={adminRoutes}
                component={FoodItems}
                isAuthenticated={isAuthenticated}
                user={user}
                adminRoute={true}
                isAdmin={isAuthenticated && user.role === "admin"}
                adminRedirect={"/profile"}
              />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/admin/food/create"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              redirect={"/login"}
            >
              <Sidebar
                navList={adminRoutes}
                component={CreateFood}
                isAuthenticated={isAuthenticated}
                user={user}
                adminRoute={true}
                isAdmin={isAuthenticated && user.role === "admin"}
                adminRedirect={"/profile"}
              />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/admin/food/update/:id"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              redirect={"/login"}
            >
              <Sidebar
                navList={adminRoutes}
                component={UpdateFood}
                isAuthenticated={isAuthenticated}
                user={user}
                adminRoute={true}
                isAdmin={isAuthenticated && user.role === "admin"}
                adminRedirect={"/profile"}
              />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>

      <Toaster />
    </Router>
  );
};

export default App;
