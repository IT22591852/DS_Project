import React, { useEffect, useState } from "react";
import { getMenuItems, addMenuItem, updateMenuItem, deleteMenuItem } from "../../api/restaurantApi";
import MenuItemCard from "../../components/MenuItemCard/MenuItemCard";
import  useAuth  from "../../hooks/useAuth";

const MenuPage = () => {
  const { user } = useAuth();
  const [menuItems, setMenuItems] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    getMenuItems(user.restaurantId)
      .then(res => setMenuItems(res.data.data))
      .catch(() => setMenuItems([]));
  }, [user]);

  const handleAdd = (item) => {
    addMenuItem(user.restaurantId, item)
      .then(() => window.location.reload());
  };

  const handleEdit = (item) => {
    // Show edit modal (not implemented here)
  };

  const handleDelete = (id) => {
    deleteMenuItem(id).then(() => setMenuItems(menuItems.filter(item => item._id !== id)));
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Menu Items</h1>
        <button onClick={() => setShowAdd(true)} className="bg-primary text-white px-4 py-2 rounded">Add New Item</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems.map(item => (
          <MenuItemCard key={item._id} item={item} onEdit={handleEdit} onDelete={handleDelete} />
        ))}
      </div>
      {/* Add Modal for adding/editing menu items */}
    </div>
  );
};

export default MenuPage;
