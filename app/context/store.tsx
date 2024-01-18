"use client";
import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { BlogDetails } from "../types/globalTypes";

interface ContextProps {
  userID: string;
  setUserID: Dispatch<SetStateAction<string>>;
  blogs: any[];
  setBlogs: Dispatch<SetStateAction<BlogDetails[]>>;
}

const GlobalContext = createContext<ContextProps>({
  userID: "",
  setUserID: (): string => "",
  blogs: [],
  setBlogs: (): BlogDetails[] => [],
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userID, setUserID] = useState("");
  const [blogs, setBlogs] = useState<BlogDetails[]>([]);
  return (
    <GlobalContext.Provider value={{ userID, setUserID, blogs, setBlogs }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
