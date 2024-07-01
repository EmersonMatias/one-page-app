'use client'
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function SessionProviders(props: ProviderProps){
    return(
        <SessionProvider>{props.children}</SessionProvider>
    )
}

interface ProviderProps {
    children: ReactNode
}
