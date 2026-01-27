import React, { useEffect, useState } from "react";
import Header from "../Common/components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/productSlice";
import SERVERURL from "../service/serverURL";
import { Link } from "react-router-dom";

function Allproducts() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const categories = [...new Set(products.map((item) => item.category))];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const filteredProducts = products.filter((item) => {
    const matchSearch = item.pname?.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category);

    return matchSearch && matchCategory;
  });

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      dispatch(getAllProducts(reqHeader));
    }
  }, [dispatch, token]);

  console.log(products);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white px-6 py-10">
        {/* ================= PAGE TITLE ================= */}
        <h1 className="text-3xl font-bold mb-10 text-center">All Products</h1>
        {/* Search Bar */}
        <div className="w-full items-center justify-center flex mb-10 ">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Your Products"
            className="w-120 h-10 rounded rounded-2xl placeholder:p-4 border border-gray-700"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* ================= FILTER SIDEBAR ================= */}
          <aside className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 h-fit">
            <h2 className="text-xl font-semibold mb-6">Filters</h2>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-300 mb-3">
                Category
              </h3>
              <div className="space-y-2 text-gray-400">
                {categories.map((category) => (
                  <label key={category} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-indigo-600"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-300 mb-3">
                Price Range
              </h3>
              <div className="space-y-2 text-gray-400">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="price"
                    className="accent-indigo-600"
                  />
                  Under ₹1,000
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="price"
                    className="accent-indigo-600"
                  />
                  ₹1,000 – ₹3,000
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="price"
                    className="accent-indigo-600"
                  />
                  ₹3,000 – ₹5,000
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="price"
                    className="accent-indigo-600"
                  />
                  Above ₹5,000
                </label>
              </div>
            </div>

            {/* Rating Filter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-3">
                Customer Rating
              </h3>
              <div className="space-y-2 text-gray-400">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-indigo-600" />
                  ⭐⭐⭐⭐ & above
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-indigo-600" />
                  ⭐⭐⭐ & above
                </label>
              </div>
            </div>
          </aside>

          {/* ================= PRODUCTS GRID ================= */}
          <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            {filteredProducts.map((item) => (
              <Link to={`/view-products/${item._id}`}>
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 hover:scale-105 transition">
                  <img
                    src={`${SERVERURL}/imgUploads/${item.uploadImages[0]}`}
                    alt="Product"
                    className="h-56 w-full object-cover rounded-xl"
                  />
                  <h3 className="mt-4 text-lg font-semibold">{item.pname}</h3>
                  <p className="text-gray-400 mt-1">₹{item.price} Rs</p>
                  
                </div>
              </Link>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default Allproducts;
