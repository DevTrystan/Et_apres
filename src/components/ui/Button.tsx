import React, { ReactElement } from "react"

interface ButtonProps {
    className?:string;
    children: ReactElement | string | number;
}

const Button: React.FC<ButtonProps> = ({
    className,
    children
}) => {
    return (
        <button className={className} onClick={()=> console.log("Coucou")}>
            {children}
        </button>
    )
}

export default Button