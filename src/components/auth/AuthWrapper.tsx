import { useSessionContext } from "@supabase/auth-helpers-react";
import { Navigate, Outlet } from "react-router-dom";

const AuthWrapper = () => {
  const { isLoading, session } = useSessionContext();

  if (isLoading) {
    return <>loading</>;
  } else {
    console.log(session);
    if (!session) {
      return <Navigate to={"/login"} replace={true} />;
    } else {
      return <Outlet />;
    }
  }
};

export default AuthWrapper;
