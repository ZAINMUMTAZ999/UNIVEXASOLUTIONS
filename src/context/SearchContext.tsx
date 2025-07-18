/* eslint-disable react-refresh/only-export-components */

  // };
  import React, { useContext, useState } from "react";

  type searchContext = {
    title: string;
    saveSearchValues: (
      title: string,
    ) => void;
  };
  
  const searchContext = React.createContext<searchContext | undefined>(undefined);
  
  export const SearchContextProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const [title, setTitle] = useState<string>(()=>sessionStorage.getItem("title") || "");
  
    const saveSearchValues = (
      title: string,
      
    ) => {
      setTitle(title);
      sessionStorage.setItem("title",title)
    
    };
  
    return (
      <searchContext.Provider
        value={{
          title,
          saveSearchValues,
        }}
      >
        {children}
      </searchContext.Provider>
    );
  };
  
  export const useSearchContext = () => {
    const context = useContext(searchContext);
    return context as searchContext;
  };