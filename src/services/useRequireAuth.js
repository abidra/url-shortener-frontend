import { useEffect } from "react";
import { useRouter } from 'next/router';
import { useAuth } from "./useAuth.js";

function useRequireAuth(redirectUrl = '/login'){
  const auth = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (auth.user === false){
      router.push(redirectUrl);
    }
  }, [auth, router]);
    
  return auth;
}

export { useRequireAuth };