import React, { useState } from "react";
import cart from "../../Assets/cart.png";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div style={{ height: "10px", padding: "-20px", marginLeft: "300px" }}>
      <button
        type="button"
        className="rounded"
        onClick={() => setShowModal(true)}
      >
        <img src={cart} alt="cart" className="h-8 "></img>
        Cart
      </button>
      {showModal && (
        <div
          className="fixed right-0 top-0 z-[1055] flex items-center justify-center h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-black bg-opacity-50"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="relative w-auto translate-y-0 opacity-100 transition-all duration-300 ease-in-out mx-auto mt-7 max-w-[500px]">
            <div className="relative flex flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
              <div className="flex items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4">
                <h5
                  className="text-xl font-medium leading-normal text-surface dark:text-white"
                  id="exampleModalLabel"
                >
                  Modal title
                </h5>
                <button
                  type="button"
                  className="text-neutral-500 hover:text-neutral-800 focus:text-neutral-800 focus:outline-none"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="relative flex-auto p-4">
                Modal body text goes here.
              </div>

              <div className="flex flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:outline-none"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
