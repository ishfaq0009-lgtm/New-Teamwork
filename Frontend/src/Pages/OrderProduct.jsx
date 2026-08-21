import React, { useState } from 'react'
import axios from 'axios'

const OrderProduct = () => {

    let [OrderData, setOrderData] = useState({
        name: "",
        address: "",
        phone: 0,
        product: "",
        quantity: "",
        price: 0,

    })


    async function OrderDataPage() {

        let response = await axios.post("http://localhost:4000/Product/OrderProduct", OrderData)
        console.log("this response is:", response)
    }




    return (
       <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-4 py-8">

    <div className="w-full max-w-lg bg-white rounded-xl border border-gray-200 shadow-sm p-6">

        <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">
                Place Your Order
            </h1>
            <p className="text-sm text-gray-500 mt-1">
                Enter your details to complete the order
            </p>
        </div>

        <div className="space-y-4">

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name
                </label>

                <input
                    onChange={function (e) {
                        setOrderData({
                            ...OrderData,
                            name: e.target.value
                        })
                    }}
                    className="h-11 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-200"
                    placeholder="Enter your name"
                    type="text"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Address
                </label>

                <input
                    onChange={function (e) {
                        setOrderData({
                            ...OrderData,
                            address: e.target.value
                        })
                    }}
                    className="h-11 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-200"
                    placeholder="Enter your address"
                    type="text"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone
                </label>

                <input
                    onChange={function (e) {
                        setOrderData({
                            ...OrderData,
                            phone: e.target.value
                        })
                    }}
                    className="h-11 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-200"
                    placeholder="Enter phone number"
                    type="number"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Product
                </label>

                <input
                    onChange={function (e) {
                        setOrderData({
                            ...OrderData,
                            product: e.target.value
                        })
                    }}
                    className="h-11 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-200"
                    placeholder="Enter product"
                    type="text"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Quantity
                    </label>

                    <input
                        onChange={function (e) {
                            setOrderData({
                                ...OrderData,
                                quantity: e.target.value
                            })
                        }}
                        className="h-11 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-200"
                        placeholder="Quantity"
                        type="number"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Price
                    </label>

                    <input
                        onChange={function (e) {
                            setOrderData({
                                ...OrderData,
                                price: e.target.value
                            })
                        }}
                        className="h-11 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-200"
                        placeholder="Price"
                        type="number"
                    />
                </div>

            </div>

            <button
                onClick={OrderDataPage}
                className="w-full h-11 mt-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
            >
                Place Order
            </button>

        </div>

    </div>

</div>
    )
}

export default OrderProduct
