import React, { useEffect, useState } from "react";
import axios from "axios";
import "./categories.css";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const { data } = await axios.get(
      `https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10`
    );
    setCategories(data.categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <h1>Our Categories</h1>
      <div className="CategoriesPage">
        {categories.map((ele) => (
          <div className="categories" key={ele.id}>
            <p>{ele.name}</p>
            <img src={ele.image.secure_url} />
          </div>
        ))}
      </div>
    </>
  );
}
