import { createContext, useState } from "react"
import { ContextProviderProps } from "../interfaces"

export const Context = createContext({} as any)

export function ContextProvider({ children }: ContextProviderProps) {
    const [search, setSearch] = useState("");

    return (
        <Context.Provider value={{ search, setSearch }}>
            {children}
        </Context.Provider>
    )
}