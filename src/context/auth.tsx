import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../service/api";
import { User } from "../types/Users";

const LOCAL_STORAGE_USER = "@WaiterApp:user";
const LOCAL_STORAGE_TOKEN = "@WaiterApp:token";

interface AuthContextData {
  user: User | null;
  login: ({ email, password }: LoginProps) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface LoginProps {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storagedUser = localStorage.getItem(LOCAL_STORAGE_USER);
    const storagedToken = localStorage.getItem(LOCAL_STORAGE_TOKEN);

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function login({ email, password }: LoginProps) {
    try {
      const { data } = await api.post("/auth/login", {
        email,
        password,
        role: "ADMIN",
      });

      setUser(data.user);

      localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(data.user.id));
      localStorage.setItem(LOCAL_STORAGE_TOKEN, data.token);

      api.defaults.headers.Authorization = `Bearer ${data.token}`;
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro, tente novamente mais tarde");
    }
  }

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
