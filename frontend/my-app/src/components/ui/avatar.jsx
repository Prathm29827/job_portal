import React from "react";

export function Avatar({ className = "", children }) {
    return (
        <div className={"relative inline-flex h-10 w-10 overflow-hidden rounded-full bg-gray-200 " + className}>
            {children}
        </div>
    );
}

export function AvatarImage({ src, alt = "", className = "" }) {
    return <img src={src} alt={alt} className={"h-full w-full object-cover " + className} />;
}
