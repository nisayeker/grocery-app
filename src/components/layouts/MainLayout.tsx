import { useSession, useSessionContext } from "@supabase/auth-helpers-react";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading, session } = useSessionContext();
  const navigate = useNavigate();
  const location = useLocation();

  if (isLoading) {
    return <>loading</>;
  }

  if (!isLoading && !session && !location.pathname.startsWith("/login")) {
    navigate("/login");
    return null;
  }

  return <>{children}</>;
};

export default MainLayout;
