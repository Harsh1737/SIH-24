import React from "react";

const HomeService = ({ 
    children, 
    className = "", 
    ...props 
    }) => {

    const defaultClassName = "w-40 h-28 border-solid border-2 border-gray-500 relative rounded-xl shadow-2xl bg-slate-100 mt-14 p-2";

    return <div className={`${defaultClassName} ${className}`} {...props}>
        {children}
    </div>;
};

export default HomeService;