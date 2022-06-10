import React from "react"

const Button: React.FC<any> = ({
    children
}) => {
    return (
        <button className="p-3 text-white bg-blue-500 rounded-full hover:bg-blue-700" onClick={()=> console.log("Coucou")}>
            {children}
        </button>
    )
}

export default Button