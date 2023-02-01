import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { PropsWithChildren, useEffect, useState } from "react";
import { supabase } from "../../libs/supabase-client";

const SupabaseContext = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  // useEffect(() => {
  //   const getsession = async () => {
  //     const {
  //       data: { session: supaSession },
  //     } = await supabase.auth.getSession();
  //     setSession(supaSession && null);
  //     setLoading(false);
  //   };
  //   getsession();
  // }, []);

  // if (loading) {
  //   return <>loading</>;
  // }

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={session}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseContext;
