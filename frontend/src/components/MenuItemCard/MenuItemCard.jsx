import React from "react";

const MenuItemCard = ({ item, onEdit, onDelete }) => (
  <div className="bg-white rounded shadow p-4 flex flex-col gap-2">
    <img src={item.image} alt={item.name} className="h-32 w-full object-cover rounded" />
    <div className="font-semibold">{item.name}</div>
    <div className="text-sm text-gray-500">{item.category}</div>
    <div className="text-primary font-bold">Rs. {item.price}</div>
    <div className="flex gap-2 mt-2">
      <button onClick={() => onEdit(item)} className="px-2 py-1 bg-blue-500 text-white rounded">Edit</button>
      <button onClick={() => onDelete(item._id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
    </div>
  </div>
);

export default MenuItemCard;
