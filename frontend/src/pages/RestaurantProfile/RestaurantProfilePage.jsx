import React, { useEffect, useState } from "react";
import { getRestaurant as fetchRestaurant } from "../../api/restaurantApi";
import useAuth from "../../hooks/useAuth";

const RestaurantProfilePage = () => {
  const { user } = useAuth();
  const [restaurant, setRestaurant] = useState(null);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    // Replace with actual restaurant ID
    fetchRestaurant(user.restaurantId).then(res => setRestaurant(res.data.data));
  }, [user]);

  const handleUpdate = async () => {
    try {
      await updateRestaurant(restaurant._id, restaurant, user.token);
      setMsg("Profile updated!");
    } catch {
      setMsg("Update failed.");
    }
  };

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div>
      <h2>Restaurant Profile</h2>
      <input value={restaurant.name} onChange={e => setRestaurant({ ...restaurant, name: e.target.value })} /><br />
      <textarea value={restaurant.description} onChange={e => setRestaurant({ ...restaurant, description: e.target.value })} /><br />
      <button onClick={handleUpdate}>Save</button>
      {msg && <p>{msg}</p>}
    </div>
  );
};
export default RestaurantProfilePage;
