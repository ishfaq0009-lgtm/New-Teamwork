import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AllProduct = () => {


    let [AllProduct, setAllProduct] = useState([])

    let navigate = useNavigate();

    async function AllProductPage() {

        let response = await axios.get("http://localhost:4000/Product/AllProduct")

        if (response.data.success == true) {

            let ProductAllData = response.data.AllProduct

            setAllProduct(ProductAllData)
        }
    }

    useEffect(() => {
        AllProductPage()
    }, [])





    return (
        <div className='p-4 pt-15'>

            {
                AllProduct.map(function (eachData) {
                    return (
                        <div className="w-full max-w-sm bg-white rounded-xl border border-gray-200 transition">

                            {/* Product Image */}
                            <div className="h-56 w-full bg-gray-50 flex items-center justify-center">
                                <img
                                    src={eachData.imageUrl}
                                    alt={eachData.title}
                                    className="h-full w-full object-contain p-4"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="p-4">

                                <div className="flex justify-between items-start gap-2">
                                    <h1 className="text-lg font-semibold text-gray-800">
                                        {eachData.title}
                                    </h1>

                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                        {eachData.category}
                                    </span>
                                </div>

                                <p className="text-sm  mt-2 line-clamp-2">
                                    Description. {eachData.description}
                                </p>

                                <div className="flex items-center gap-3 mt-4">
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Rs. {eachData.price}
                                    </h2>

                                    <span className="text-sm text-green-600">
                                        {eachData.discount}% off
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-4">

                                    <span className="text-xs bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md text-gray-600">
                                        Size: {eachData.size}
                                    </span>

                                    <span className="text-xs bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md text-gray-600">
                                        Color: {eachData.color}
                                    </span>

                                    <span className="text-xs bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md text-gray-600">
                                        {eachData.stock}
                                    </span>

                                </div>

                                <div className="mt-4 pt-3 border-t border-gray-100">
                                    <p className="text-sm text-gray-500">
                                        Quality:
                                        <span className="ml-1 text-gray-700 font-medium">
                                            {eachData.quality}
                                        </span>
                                    </p>
                                </div>
                                <div className="flex gap-2 mt-4">
                                    <button onClick={function () {
                                        navigate("/OrderProduct")
                                    }}
                                        className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                                        Order
                                    </button>

                                    <button className="flex-1 bg-red-500 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-red-600 transition">
                                        Delete
                                    </button>

                                </div>

                            </div>

                        </div>
                    )
                })
            }

        </div>
    )
}

export default AllProduct
