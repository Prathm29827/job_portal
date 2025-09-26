import React from "react";

export function Table({ children, ...props }) {
  return (
    <table className="w-full text-sm text-left border-collapse" {...props}>
      {children}
    </table>
  );
}

export function TableHeader({ children, ...props }) {
  return <thead {...props}>{children}</thead>;b 
}

export function TableBody({ children, ...props }) {
  return <tbody {...props}>{children}</tbody>;
}

export function TableRow({ children, ...props }) {
  return <tr {...props}>{children}</tr>;
}

export function TableHead({ children, ...props }) {
  return (
    <th className="px-4 py-2 text-left font-medium text-gray-700" {...props}>
      {children}
    </th>
  );
}

export function TableCell({ children, ...props }) {
  return (
    <td className="px-4 py-2 border-t border-gray-200" {...props}>
      {children}
    </td>
  );
}

export function TableCaption({ children, ...props }) {
  return (
    <caption className="text-sm text-gray-500 mt-2" {...props}>
      {children}
    </caption>
  );
}
