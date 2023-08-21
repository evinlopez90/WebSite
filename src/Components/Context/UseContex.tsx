/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-empty-function */

import React, { createContext,  useEffect,  useState } from 'react';

type Contextrovider = {
    children: React.ReactNode
}

type ContexTypes = {
    detail: boolean;
    setDetail: React.Dispatch<React.SetStateAction<boolean>>;
    id: number;
    setId: React.Dispatch<React.SetStateAction<number>>;
}

export const context = createContext<ContexTypes>({} as ContexTypes);



export const StateProvider: React.FC<Contextrovider> = ({ children }) => {
  
const [id, setId] = useState<number>(0)
const [detail, setDetail] = useState<boolean>(false)

useEffect(() => {
console.log(id, detail);

}, [id, detail ])

  return <context.Provider value={{ id, setId, detail, setDetail }}> {children} </context.Provider>;
}
