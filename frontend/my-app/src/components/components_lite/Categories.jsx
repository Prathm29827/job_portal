import React from "react";

const Categories = () => {
  const categories = [
    { id: 1, name: "Technology", image: "/images/tech.png" },
    { id: 2, name: "Finance", image: "/images/finance.png" },
    { id: 3, name: "Marketing", image: "/images/marketing.png" },
    { id: 4, name: "Design", image: "/images/design.png" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {categories.map((cat) => (
        <div 
          key={cat.id} // ✅ FIXED: unique key
          className="bg-white border rounded-lg shadow-sm p-4 text-center hover:shadow-md transition"
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="h-16 w-16 mx-auto mb-3"
          />
          <h3 className="text-sm font-semibold text-gray-700">{cat.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Categories;
