import { useLocalStorage } from "usehooks-ts";

const CartPage = () => {
  const [cart, setCart] = useLocalStorage("cart", [
    ...JSON.parse(localStorage.getItem("cart") || "[]"),
  ]);

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-xl font-semibold">Cart</h1>
      <div className="flex flex-col mt-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Product Name</h2>
          <h2 className="font-semibold">Price</h2>
        </div>
        {cart.map((item) => (
          <div className="flex items-center justify-between mt-2">
            <h2>{item.name}</h2>
            <h2>Rp {item.price}</h2>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <h2 className="font-semibold">
          Total: Rp {cart.reduce((acc, item) => acc + item.price, 0)}
        </h2>
      </div>
      <button
        className="
        bg-green-700
        text-white
        rounded-md
        px-4
        py-2
        mt-4
        hover:bg-green-600
        
      "
        onClick={() => {
          alert("Checkout Success!");
          setCart([]);
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default CartPage;
