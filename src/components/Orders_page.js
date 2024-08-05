import React from "react";

const OrdersPage = () => {
  // Dummy data
  const orders = [
    {
      id: 1,
      date: "2024-08-01",
      items: ["Item 1", "Item 2", "Item 3"],
      total: "$100.00",
    },
    {
      id: 2,
      date: "2024-07-25",
      items: ["Item A", "Item B"],
      total: "$45.50",
    },
    {
      id: 3,
      date: "2024-07-10",
      items: ["Item X", "Item Y", "Item Z"],
      total: "$75.25",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {orders.length > 0 ? (
          <ul className="space-y-4">
            {orders.map((order) => (
              <li key={order.id} className="border-b border-gray-200 pb-4">
                <h2 className="text-xl font-semibold">Order #{order.id}</h2>
                <p className="text-gray-600">Date: {order.date}</p>
                <p className="text-gray-600">Total: {order.total}</p>
                <ul className="list-disc pl-5 mt-2">
                  {order.items.map((item, index) => (
                    <li key={index} className="text-gray-800">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
