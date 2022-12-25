import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Loading from "./Loading";
function RequireAuth({ children }) {
  let location = useLocation();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
export default RequireAuth;
