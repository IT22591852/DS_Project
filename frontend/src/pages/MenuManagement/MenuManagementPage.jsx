import React, { useEffect, useState } from "react";
import { fetchMenuItems, addMenuItem } from "../../api/restaurantApi";
import MenuItemCard from "../../components/MenuItemCard/MenuItemCard";
import useAuth from "../../hooks/useAuth";

const MenuManagementPage = () => {
  const { user } = useAuth();
  const [menu, setMenu] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", description: "", price: "", category: "" });

  useEffect(() => {
    fetchMenuItems(user.restaurantId).then(res => setMenu(res.data.data));
  }, [user]);

  const handleAdd = async e => {
    e.preventDefault();
    const item = { ...newItem, price: Number(newItem.price) };
    await addMenuItem(user.restaurantId, item, user.token);
    setMenu([...menu, item]);
    setNewItem({ name: "", description: "", price: "", category: "" });
  };

  return (
    <div>
      <h2>Menu Management</h2>
      <form onSubmit={handleAdd}>
        <input placeholder="Name" value={newItem.name} onChange={e => setNewItem({ ...newItem, name: e.target.value })} required />
        <input placeholder="Description" value={newItem.description} onChange={e => setNewItem({ ...newItem, description: e.target.value })} required />
        <input type="number" placeholder="Price" value={newItem.price} onChange={e => setNewItem({ ...newItem, price: e.target.value })} required />
        <input placeholder="Category" value={newItem.category} onChange={e => setNewItem({ ...newItem, category: e.target.value })} required />
        <button type="submit">Add Item</button>
      </form>
      {menu.map(item => <MenuItemCard key={item._id} item={item} />)}
    </div>
  );
};
export default MenuManagementPage;
