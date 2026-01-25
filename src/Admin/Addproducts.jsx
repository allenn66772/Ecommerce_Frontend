import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/productSlice";

function Addproducts() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.products); // ✅ FIX

  const [productDetails, setproductDetails] = useState({
    pname: "",
    description: "",
    productDesc: "",
    price: "",
    dprice: "",
    discount: "",
    highlights: "",
    uploadImages: [],
  });

  const [imagePreviews, setImagePreviews] = useState([]);

  // handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setproductDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ handle multiple image uploads (append)
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setproductDetails((prev) => ({
      ...prev,
      uploadImages: [...prev.uploadImages, ...files],
    }));

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...previews]);
  };

  // ✅ remove single image
  const removeImage = (index) => {
    setproductDetails((prev) => ({
      ...prev,
      uploadImages: prev.uploadImages.filter((_, i) => i !== index),
    }));

    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  // ✅ add product
  const handleAddProduct = (e) => {
    e.preventDefault();

    const {
      pname,
      description,
      productDesc,
      price,
      dprice,
      discount,
      highlights,
      uploadImages,
    } = productDetails;

    const highlightsArray = highlights
      .split("\n") // ✅ FIX
      .map((h) => h.trim())
      .filter(Boolean);

    const formData = new FormData();
    formData.append("pname", pname);
    formData.append("description", description);
    formData.append("productDesc", productDesc);
    formData.append("price", price);
    formData.append("dprice", dprice);
    formData.append("discount", discount);

    highlightsArray.forEach((h) => formData.append("highlights", h));
    uploadImages.forEach((img) =>
      formData.append("uploadImages", img)
    );

    dispatch(addProduct(formData));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-3xl bg-[#111] border border-gray-800 rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-semibold text-white mb-8">
          Add New Product
        </h2>

        <form className="space-y-6" onSubmit={handleAddProduct}>

          <input
            type="text"
            name="pname"
            value={productDetails.pname}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 text-white"
          />

          <textarea
            name="description"
            value={productDetails.description}
            onChange={handleChange}
            placeholder="Short Description"
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 h-20 text-white"
          />

          <textarea
            name="productDesc"
            value={productDetails.productDesc}
            onChange={handleChange}
            placeholder="Detailed Product Description"
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 h-28 text-white"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="number" name="price" value={productDetails.price} onChange={handleChange} placeholder="Price" className="input" />
            <input type="number" name="dprice" value={productDetails.dprice} onChange={handleChange} placeholder="Discount Price" className="input" />
            <input type="number" name="discount" value={productDetails.discount} onChange={handleChange} placeholder="Discount (%)" className="input" />
          </div>

          <textarea
            name="highlights"
            value={productDetails.highlights}
            onChange={handleChange}
            placeholder="Product Highlights (one per line)"
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 h-28 text-white"
          />

          {/* Image upload */}
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 text-white"
          />

          {/* Image previews */}
          {imagePreviews.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {imagePreviews.map((img, index) => (
                <div key={index} className="relative">
                  <img src={img} className="h-32 w-full object-cover rounded-xl" />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-black/70 text-white rounded-full px-2"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 py-3 rounded-xl text-white font-semibold disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Addproducts;
