import { FaCartPlus } from "react-icons/fa";
import { IProduct } from "../../hooks/useProducts";
import { useLocalStorage } from "usehooks-ts";

type AddCartButtonProps = {
  item: IProduct;
};

const AddCartButton = (props: AddCartButtonProps) => {
  const [cart, setCart] = useLocalStorage("cart", [
    ...JSON.parse(localStorage.getItem("cart") || "[]"),
  ]);

  return (
    <button
      className="bg-blue-800 text-white rounded-md p-2"
      onClick={(e) => {
        e.stopPropagation();
        setCart([...cart, props.item]);
      }}
    >
      <FaCartPlus />
    </button>
  );
};

export default AddCartButton;
