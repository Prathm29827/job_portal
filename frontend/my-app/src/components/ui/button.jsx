import React from "react";

export function Button({ className = "", children, ...props }) {
    return (
        <button
            className={
                "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 " +
                className
            }
            {...props}
        >
            {children}
        </button>
    );
}
