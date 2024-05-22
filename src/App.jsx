import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import AdminEvents from "./pages/admin/Events/AdminEvents";
import CreateEvent from "./pages/admin/Events/CreateEvent";
import { updateEvent } from "./redux/actions/events";
import UpdatEvent from "./pages/admin/Events/UpdateEvent";
import AdminDecors from "./pages/admin/Decors/AdminDecor";
import CreateDecor from "./pages/admin/Decors/CreateDecor";
import { updateDecor } from "./redux/actions/decor";
import UpdatDecor from "./pages/admin/Decors/UpdateDecor";
import BookEvent from "./pages/BookEvent";
import ClientEvents from "./pages/ClientEvents";
import AdminClients from "./pages/admin/AdminClients";
import RequestDetail from "./pages/RequestDetail";
import Cart from "./pages/Cart";
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
          path="/book_event"
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
                component={BookEvent}
                isAuthenticated={isAuthenticated}
                user={user}
              />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/client_events"
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
                component={ClientEvents}
                isAuthenticated={isAuthenticated}
                user={user}
              />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/request/:id"
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
                component={RequestDetail}
                isAuthenticated={isAuthenticated}
                user={user}
              />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/cart"
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
                component={Cart}
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

        <Route
          path="/admin/events"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              redirect={"/login"}
            >
              <Sidebar
                navList={adminRoutes}
                component={AdminEvents}
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
          path="/admin/events/create"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              redirect={"/login"}
            >
              <Sidebar
                navList={adminRoutes}
                component={CreateEvent}
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
          path="/admin/events/update/:id"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              redirect={"/login"}
            >
              <Sidebar
                navList={adminRoutes}
                component={UpdatEvent}
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
          path="/admin/decors"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              redirect={"/login"}
            >
              <Sidebar
                navList={adminRoutes}
                component={AdminDecors}
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
          path="/admin/decors/create"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              redirect={"/login"}
            >
              <Sidebar
                navList={adminRoutes}
                component={CreateDecor}
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
          path="/admin/decors/update/:id"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              redirect={"/login"}
            >
              <Sidebar
                navList={adminRoutes}
                component={UpdatDecor}
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
          path="/admin/clients"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              redirect={"/login"}
            >
              <Sidebar
                navList={adminRoutes}
                component={AdminClients}
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
