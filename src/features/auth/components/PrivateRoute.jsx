import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "src/contexts";

const PrivateRoute = () => {
  const location = useLocation();
  const { authToken } = useAuthContext();

  return !authToken ? (
    <Navigate to={"/login"} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export { PrivateRoute };
