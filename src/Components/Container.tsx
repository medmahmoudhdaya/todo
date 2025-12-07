import type { ReactNode } from "react";

export default function Container({ children } : { children : ReactNode}){
    return (
        <div className="w-1/2 mx-auto py-8 px-4 mt-10">
            { children }
        </div>
    )
}