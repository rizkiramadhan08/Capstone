import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import RegisterUser from "./pages/Register";
import LoginUser from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/user/PersonalKategori";
import HomeLayout from "./layouts/HomeLayout";
import HomePage from "./pages/user/HomePage";
import DestinationDetail from "./pages/user/DetailDestinasi";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import OverviewPage from "./pages/admin/OverviewPage";
import UserPage from "./pages/admin/UserPage";
import RoutePage from "./pages/admin/RoutePage";
import ContentPage from "./pages/admin/ContentPage";
import DestinationPage from "./pages/admin/DestinationPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserDetailPage from "./pages/admin/UserDetailPage";
import DetailDestination from "./pages/admin/DetailDestination";
import AddDestinationPage from "./pages/admin/AddDestinationPage";
import AddContentPage from "./pages/admin/AddContentPage";
import DetailContentPage from "./pages/admin/DetailContentPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Routes untuk Landing Layout */}
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/" element={<LandingLayout />}>
            <Route index element={<LandingPage />} />
          </Route>
          {/* Routes untuk Home Layout */}
          <Route element={<ProtectedRoute />}>
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/home" element={<HomeLayout />}>
              <Route index element={<HomePage />} />
              <Route path=":id" element={<DestinationDetail />} />
            </Route>
          </Route>
          {/* Routes untuk Admin Layout */}
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<OverviewPage />} />
            <Route path="/admin/user" element={<UserPage />} />
            <Route path="/admin/user/detail/:id" element={<UserDetailPage />} />
            <Route path="/admin/destination" element={<DestinationPage />} />
            <Route
              path="/admin/destination/detail/:id"
              element={<DetailDestination />}
            />
            <Route
              path="/admin/destination/create"
              element={<AddDestinationPage />}
            />
            <Route path="/admin/content" element={<ContentPage />} />
            <Route
              path="/admin/content/detail/:id"
              element={<DetailContentPage />}
            />
            <Route
              path="/admin/content/create"
              element={<AddContentPage />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
