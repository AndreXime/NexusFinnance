import { createContext, useState, useContext, useEffect } from "react";

interface UserBody {
  nome: string;
  email: string;
  createdAt: string;
}

const UserContext = createContext<
  | {
      userData: UserBody | null;
      setUserData: (data: UserBody | null) => void;
    }
  | undefined
>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<UserBody | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/user", {
        method: "GET",
        credentials: "include"
      });
      if (response.ok) {
        const dJson = await response.json();
        setUserData(dJson.message);
      }
    };
    fetchData();
  }, []);

  return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de UserProvider");
  }
  return context;
};
