import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    let [AddProduct, setAddProduct] = useState({
        title: "",
        description: "",
        imageUrl: "",
        price: 0,
        size: "",
        quality: "",
        color: "",
        stock: "",
        discount: 0,
        category: ""
    });

    let navigate= useNavigate();

    async function ProductAdd() {

        let response = await axios.post("http://localhost:4000/Product/AddProduct", AddProduct)
        console.log("this response is:", response)
        if(response.data.success==true){
            navigate("/AllProduct")
        }
    }


    return (
        <div className="min-h-screen w-full bg-gray-100 flex justify-center py-10 px-4">
            <div className="w-full max-w-3xl bg-white rounded-2xl border border-gray-200 shadow-sm p-8">

                <div className="mb-8 border-b border-gray-200 pb-5">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Add New Product
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Add product details to your store
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Product Name
                        </label>
                        <input
                            onChange={function (e) {
                                setAddProduct({
                                    ...AddProduct,
                                    title: e.target.value
                                })
                            }}
                            className="h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 transition"
                            placeholder="Enter product name"
                            type="text"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Image URL
                        </label>
                        <input
                            onChange={function (e) {
                                setAddProduct({
                                    ...AddProduct,
                                    imageUrl: e.target.value
                                })
                            }}
                            className="h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 transition"
                            placeholder="Enter image URL"
                            type="text"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            onChange={function (e) {
                                setAddProduct({
                                    ...AddProduct,
                                    description: e.target.value
                                })
                            }}
                            className="h-22 w-full rounded-lg border border-gray-300 bg-white px-3 pt-2 text-sm text-gray-800 transition"
                            placeholder="Enter product description"
                            type="text"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Price
                        </label>
                        <input
                            onChange={function (e) {
                                setAddProduct({
                                    ...AddProduct,
                                    price: e.target.value
                                })
                            }}
                            className="h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 transition"
                            placeholder="Enter price"
                            type="number"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Size
                        </label>
                        <input
                            onChange={function (e) {
                                setAddProduct({
                                    ...AddProduct,
                                    size: e.target.value
                                })
                            }}
                            className="h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 transition"
                            placeholder="Enter size"
                            type="text"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Quality
                        </label>
                        <input
                            onChange={function (e) {
                                setAddProduct({
                                    ...AddProduct,
                                    quality: e.target.value
                                })
                            }}
                            className="h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 transition"
                            placeholder="Enter quality"
                            type="text"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Color
                        </label>
                        <input
                            onChange={function (e) {
                                setAddProduct({
                                    ...AddProduct,
                                    color: e.target.value
                                })
                            }}
                            className="h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 transition"
                            placeholder="Enter color"
                            type="text"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Stock
                        </label>
                        <input
                            onChange={function (e) {
                                setAddProduct({
                                    ...AddProduct,
                                    stock: e.target.value
                                })
                            }}
                            className="h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 transition"
                            placeholder="Enter stock"
                            type="text"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Discount
                        </label>
                        <input
                            onChange={function (e) {
                                setAddProduct({
                                    ...AddProduct,
                                    discount: e.target.value
                                })
                            }}
                            className="h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 transition"
                            placeholder="Enter discount"
                            type="number"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category
                        </label>
                        <input
                            onChange={function (e) {
                                setAddProduct({
                                    ...AddProduct,
                                    category: e.target.value
                                })
                            }}
                            className="h-11 w-176 rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 transition"
                            placeholder="Enter category"
                            type="text"
                        />
                    </div>

                </div>

                <div className="mt-8 pt-5 border-t border-gray-200 flex justify-center">
                    <button
                        onClick={ProductAdd}
                        className="h-11 w-200 rounded-lg bg-blue-800 text-white text-lg font-medium hover:bg-blue-900 transition"
                    >
                        Add Product
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AddProduct
