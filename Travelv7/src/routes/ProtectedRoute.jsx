import { Outlet, Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
export default function ProtectedRoute() {
  const token = useAuthStore((state) => state.auth);

  return token ? <Outlet /> : <Navigate to="/login" />;
}
