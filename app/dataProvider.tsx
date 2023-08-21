'use client';

import { useState, createContext, useContext } from 'react';

type Props = {
  children: React.ReactNode;
};

interface DataProps {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

export const DataContext = createContext<DataProps>({
  data: '',
  setData: () => {},
});

export default function DataContextProvider({ children }: Props) {

  const [data, setData] = useState<string>('test');

  return (
    <DataContext.Provider value={{ data, setData  }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);