import React, { useRef, useState, useEffect, createContext, useContext } from "react";

const PopoverCtx = createContext({ open: false, setOpen: () => { } });

export function Popover({ children }) {
    const [open, setOpen] = useState(false);
    return <PopoverCtx.Provider value={{ open, setOpen }}>{children}</PopoverCtx.Provider>;
}

export function PopoverTrigger({ asChild = false, children }) {
    const { open, setOpen } = useContext(PopoverCtx);
    const trigger = React.cloneElement(children, {
        onClick: (e) => {
            children.props.onClick?.(e);
            setOpen(!open);
        },
    });
    return asChild ? trigger : <button onClick={() => setOpen(!open)}>{children}</button>;
}

export function PopoverContent({ className = "", children }) {
    const { open, setOpen } = useContext(PopoverCtx);
    const ref = useRef(null);

    useEffect(() => {
        function onDocClick(e) {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        }
        if (open) document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, [open, setOpen]);

    if (!open) return null;
    return (
        <div ref={ref} className={"absolute z-50 mt-2 w-56 rounded-md border border-gray-200 bg-white p-3 shadow-lg " + className}>
            {children}
        </div>
    );
}
